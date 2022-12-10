import axios from "axios";

// TODO: configure base URL according to environment
const baseURL = "http://127.0.0.1:8000/api/";

/**
 * Creates axios instance for use in REST requests
 *
 * Because we're using JWTs for authentication, need
 * to create an axiosInstance so we can use an interceptor
 * to refresh the access token when it expires.
 */
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

/**
 * Intercepts requests to add access token
 */
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("rctr-access-token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

/**
 * Intercepts responses and refreshes the access token
 * should it expire.
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    // Prevent infinite loops
    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + "token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    // If access token is expired, try to get a new one
    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("rctr-refresh-token");
      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        if (tokenParts.exp > now) {
          return axiosInstance
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("rctr-access-token", response.data.access);

              axiosInstance.defaults.headers["Authorization"] =
                "Bearer " + response.data.access;
              originalRequest.headers["Authorization"] =
                "Bearer " + response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
              Promise.reject(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login/";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/login/";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
