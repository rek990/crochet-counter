import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";

// import "./App.css";
import MainContainer from "./components/MainContainer";
// import NavBar from "./components/navbar/navbar";
// import LoginForm from "./components/authentication/Login";
// import Settings from "./components/navbar/settings";
import { AuthProvider } from "./components/authentication/AuthContext";
// import { ProtectedRoute } from "./components/authentication/ProtectedRoute";

import logo from "./MossStitchBlanket.jpg";

function App() {
  return (
    <Flex
      className="App"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      {" "}
      <Router>
        <AuthProvider></AuthProvider>
      </Router>
      <MainContainer />
      <Image src={logo} fit="fill" flex={1} maxHeight="100vh" zIndex={-1} />
    </Flex>
  );
}

export default App;
