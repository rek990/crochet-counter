import { Flex, Image, Img } from "@chakra-ui/react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import logo from "./MossStitchBlanket.jpg";

function App() {
  return (
    <Flex
      className="App"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <MainContainer />
      <Image src={logo} fit="fill" zIndex={-1} />
    </Flex>
  );
}

export default App;
