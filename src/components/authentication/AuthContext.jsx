import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../crud/Api";

const AuthContext = createContext(null);

/**
 * Parses JWT to access various attributes
 *
 * @param {} token - token to parse
 */
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

/**
 * Checks whether user is already authenticated
 *
 * If a user has a valid refresh token, we can assume they
 * have already been authenticated, and the isAuthenticated
 * state can be set to true to direct to the login page. If
 * a user does not have a refresh token, then they are not
 * authenticated and should proceed to the login page. Similarly,
 * if the refresh token has expired, they should authenticate again
 */
const authCheck = () => {
  const token = localStorage.getItem("rctr-refresh-token");
  if (!token || token === "undefined") {
    return false;
  }
  const parsedToken = parseJwt(token);
  if (parsedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("rctr-refresh-token");
    localStorage.removeItem("rctr-access-token");
    return false;
  }
  return true;
};

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(authCheck());
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const navigate = useNavigate();

  const getTokens = () => {
    const authUrl = "http://localhost:8000/api/token/";
    const authData = {
      username: username,
      password: password,
    };
    fetch(authUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setIsAuthenticated(true);
        localStorage.setItem("rctr-refresh-token", data.refresh);
        localStorage.setItem("rctr-access-token", data.access);
        navigate("/");
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  const handleLogin = async () => {
    await getTokens();
  };

  /**
   * Cleanup actions on logout
   *
   * When a user logs out, clear their tokens to force a
   * login again. Additionally, clear existing state so
   * everything is fresh if a different user logs in.
   */
  const handleLogout = () => {
    localStorage.removeItem("rctr-refresh-token");
    localStorage.removeItem("rctr-access-token");
    setUsername(null);
    setPassword(null);
    setUserDetails(null);
    setIsAuthenticated(false);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    username,
    password,
    setUsername: setUsername,
    setPassword: setPassword,
    setIsAuthenticated: setIsAuthenticated,
    isAuthenticated,
    setUserDetails,
    userDetails,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
