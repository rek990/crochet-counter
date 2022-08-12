import { VStack, Flex, Spacer, Heading } from "@chakra-ui/react";
import RowCounterForm from "./RowCounterForm";

const RowCounterContainer = () => {
  return (
    <Flex
      className="row-counter-container"
      direction="row"
      width="100%"
      justifyContent="center"
    >
      <VStack>
        <Spacer />
        <Flex
          width="30vw"
          height="7vh"
          bg="#A0605F"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" color="white">
            Row Counter
          </Heading>
        </Flex>
        <br />
        <RowCounterForm />
      </VStack>
    </Flex>
  );
};

export default RowCounterContainer;
