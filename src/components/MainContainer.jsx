import React from "react";
import { Flex } from "@chakra-ui/react";
import RowCounterContainer from "./RowCounterContainer";

const MainContainer = () => {
  return (
    <>
      <Flex
        position="absolute"
        bg="rgba(95, 158, 160, 0.6)"
        // bg="rgba(160, 95, 158, 0.6)"
        // bg="rgba(160, 96, 95, 0.6)"
        // bg="rgba(95, 160, 97, 0.6)"
        height="75vh"
        width="75vw"
        justifyContent="center"
        alignItems="center"
        borderRadius="15px"
      >
        <RowCounterContainer />
      </Flex>
    </>
  );
};

export default MainContainer;
