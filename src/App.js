import { Flex, Image, Img } from "@chakra-ui/react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import logo from "./MossStitchBlanket.jpg";

function App() {
  return (
    <Flex
      className="App"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <MainContainer />
      <Image src={logo} fit="fill" flex={1} maxHeight="100vh" zIndex={-1} />
    </Flex>
  );
}

export default App;
