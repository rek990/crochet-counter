import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";

// import "./App.css";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/navbar/Navbar";
// import LoginForm from "./components/authentication/Login";
// import Settings from "./components/navbar/Settings";
import { AuthProvider } from "./components/authentication/AuthContext";
import { ProtectedRoute } from "./components/authentication/ProtectedRoute";

import logo from "./MossStitchBlanket.jpg";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Flex
            className="App"
            height="100vh"
            alignItems="center"
            justifyContent="center"
          >
            <Navbar />
            <Routes>
              <Route
                index
                element={
                  // <ProtectedRoute>
                  <MainContainer />
                  // </ProtectedRoute>
                }
              />
              {/* <Route path="login" element={<LoginForm />} /> */}
              {/* <Route
              path="projects"
              element={
                <ProtectedRoute>
                  <ProjectsContainer />
                </ProtectedRoute>
              }
            /> */}
              {/* <Route
            path="settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          /> */}
            </Routes>
            <Image
              src={logo}
              fit="fill"
              flex={1}
              maxHeight="100vh"
              zIndex={-5}
            />
          </Flex>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
