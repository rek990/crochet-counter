import React, { useState, useEffect } from "react";
import {
  Grid,
  GridItem,
  Input,
  Button,
  FormControl,
  Heading,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";

const EnterProjectForm = ({
  setDisplayRowNumber,
  enterRowNumber,
  setDisplayProjectName,
  enterProjectName,
  setEnterRowNumber,
  setEnterProjectName,
}) => {
  const handleSubmit = () => {
    setDisplayRowNumber(enterRowNumber);
    setDisplayProjectName(enterProjectName);
    setEnterRowNumber("");
    setEnterProjectName("");
  };

  const handleResetEntry = () => {
    setEnterRowNumber("");
    setEnterProjectName("");
  };
  return (
    <>
      <GridItem id="project-name-form" colSpan={2} colStart={3}>
        <Input
          id="project-name-input"
          placeholder="Enter Project Name"
          size="sm"
          borderRadius="6px"
          border="3px solid"
          borderColor="#5F9EA0"
          bg="white"
          focusBorderColor="#A05F9E"
          errorBorderColor="#FE1100"
          value={enterProjectName}
          onChange={(event) => {
            setEnterProjectName(event.target.value);
          }}
        ></Input>
      </GridItem>
      <GridItem id="row-counter-form" colSpan={2}>
        <Input
          id="row-number-input"
          placeholder="Enter Row Number"
          size="sm"
          borderRadius="6px"
          border="3px solid"
          borderColor="#5F9EA0"
          bg="white"
          focusBorderColor="#A05F9E"
          errorBorderColor="#FE1100"
          value={enterRowNumber}
          onChange={(event) => {
            setEnterRowNumber(Number(event.target.value));
          }}
        ></Input>
      </GridItem>

      <GridItem id="submit-reset-buttons" colSpan={2}>
        <HStack>
          <Button
            id="submit-row-button"
            type="submit"
            size="sm"
            bg="#5F9EA0"
            color="white"
            onClick={handleSubmit}
          >
            Submit Entry
          </Button>
          <Button
            id="reset-row-button"
            type="reset"
            size="sm"
            bg="#5F9EA0"
            color="white"
            onClick={handleResetEntry}
          >
            Reset Entry
          </Button>
        </HStack>
      </GridItem>
    </>
  );
};

export default EnterProjectForm;
