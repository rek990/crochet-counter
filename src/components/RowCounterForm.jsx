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

const RowCounterForm = () => {
  const [enterRowNumber, setEnterRowNumber] = useState("");
  const [displayRowNumber, setDisplayRowNumber] = useState(enterRowNumber);
  // const [savedRowNumber, setSavedRowNumber] = useState("");
  const [enterProjectName, setEnterProjectName] = useState("");
  const [displayProjectName, setDisplayProjectName] = useState(enterProjectName);

  const handleSubmit = () => {
    setDisplayRowNumber(enterRowNumber); // similar to document.getElementById("row-heading-number").innerText = enterRowNumber;
    setDisplayProjectName(enterProjectName);
    setEnterRowNumber("");
    setEnterProjectName("");
  };

  const handleResetEntry = () => {
    setEnterRowNumber("");
    setEnterProjectName("");
  }

  const handleResetAll = () => {
    setDisplayRowNumber("");
    setDisplayProjectName("");
  }

  const handleIncrementor = () => {
    setDisplayRowNumber(+displayRowNumber + 1);
  };

  const handleDecrementor = () => {
    if (displayRowNumber > 0) {
      setDisplayRowNumber(+displayRowNumber - 1);
    } else {
      setDisplayRowNumber(0);
    }
  };

  const saveRowCount = () => {
    // this will also be a PUT request

    const res = fetch("http://localhost:3000/rowCount", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ savedRowCount: displayRowNumber }), // this is how you format what goes in the POST request
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisplayRowNumber(data.savedRowCount);
        setDisplayRowNumber("");
      });
  };

  // POST request needs more work before implementing useEffect()
  /*  useEffect(() => {
    saveRowCount();
  }, []); */

  const resumeRowCount = () => {
    // click Resume button
    // this will eventually become a GET request (start with JSON server and take it from there)
    // display the saved count into the UI
    const res = fetch("http://localhost:3000/rowCount")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].savedRowCount);
        setDisplayRowNumber(data[0].savedRowCount);
      });
  };

  return (
    <>
      <FormControl>
        {/* Note to adjust the templateRows and/or Columns to accommodate for double- and triple-digit row numbers. */}
        <Grid
          className="stitch-counter-container-grid"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap={5}
          justifyContent="center"
          alignItems="center"
          textAlign="left"
          background="#A0605F"
          borderRadius="15px"
          padding="3%"
        >
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
          <GridItem id="project-name-label" colSpan={2} colStart={3}>
            <Flex
              height="5vh"
              bg="#5F9EA0"
              borderRadius="15px"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                              color="white"
                textAlign="center"
                className="display-project-name"
              >
                <b>Project: {displayProjectName}</b>
              </Text>
            </Flex>
          </GridItem>
          <GridItem id="row-number-label" colSpan={2}>
            <Flex
              height="5vh"
              bg="#5F9EA0"
              borderRadius="15px"
              justifyContent="center"
              alignItems="center"
            >
              <Heading
                size="lg"
                color="white"
                textAlign="center"
                className="display-row-count"
              >
                Row # {displayRowNumber}
              </Heading>
            </Flex>
          </GridItem>
          <GridItem id="stitch-counter-buttons">
            <HStack>
              <Button
                id="incrementor-button"
                type="button"
                size="sm"
                bg="#5F9EA0"
                color="white"
                onClick={handleIncrementor}
              >
                +
              </Button>
              <Button
                id="decrementor-button"
                type="button"
                size="sm"
                bg="#5F9EA0"
                color="white"
                onClick={handleDecrementor}
              >
                -
              </Button>
              <Button
                id="save-row-button"
                type="submit"
                size="sm"
                bg="#5F9EA0"
                color="white"
                onClick={saveRowCount}
              >
                Save
              </Button>
              <Button
                id="resume-counting-button"
                type="button"
                size="sm"
                bg="#5F9EA0"
                color="white"
                onClick={resumeRowCount}
              >
                Resume
              </Button>
              <Button
                id="reset-row-count"
                type="reset"
                size="sm"
                bg="#5F9EA0"
                color="white"
                onClick={handleResetAll}
              >
                Reset All
              </Button>
            </HStack>
          </GridItem>
          <GridItem id="decrementor-button-container"></GridItem>
          <GridItem id="save-row-button"></GridItem>
          <GridItem id="resume-button"></GridItem>
          <GridItem id="reset-row-count-button"></GridItem>
        </Grid>
      </FormControl>
    </>
  );
};

export default RowCounterForm;
