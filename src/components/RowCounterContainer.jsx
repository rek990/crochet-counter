import { VStack, Flex, Spacer, Heading } from "@chakra-ui/react";

const RowCounterContainer = () => {
  return (
    <Flex direction="row" width="100%">
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
          <Heading size="lg" color="#5F9EA0">
            Stitch Counter
          </Heading>
        </Flex>
        {/* <RowCounterForm/> */}
      </VStack>
    </Flex>
  );
};

export default RowCounterContainer;
