import React from "react";
import { Flex } from "@chakra-ui/react";
import RowCounterContainer from "../components/row_counter/RowCounterContainer";

const MainContainer = () => {
  return (
    <>
      <Flex
        position="absolute"
        bg="rgba(95, 158, 160, 0.6)"
        height="75vh"
        width="75vw"
        justifyContent="center"
        alignItems="center"
        borderRadius="15px"
        padding="5%"
      >
        <RowCounterContainer />
      </Flex>
    </>
  );
};

export default MainContainer;
