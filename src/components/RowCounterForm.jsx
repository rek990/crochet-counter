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
} from "@chakra-ui/react";

const RowCounterForm = () => {
  const [enterRowNumber, setEnterRowNumber] = useState("");
  const [displayRowNumber, setDisplayRowNumber] = useState(enterRowNumber);
  const [savedRowNumber, setSavedRowNumber] = useState("");

  const handleSubmit = () => {
    setDisplayRowNumber(enterRowNumber); // similar to document.getElementById("row-heading-number").innerText = enterRowNumber;
    setEnterRowNumber("");
  };

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
    // this will eventually become a POST request (start with JSON server and take it from there)
    // this will also be a PUT request

    /* const savedRowData = {
      savedRowCount: displayRowNumber,
    }
 */
    const res = fetch("http://localhost:3000/rowCount", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({savedRowCount: displayRowNumber}), // this is how you format what goes in the POST request
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
    document.getElementById("resume-row-count").innerText = displayRowNumber;
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
          <GridItem id="row-counter-form" colSpan={2} colStart={4}>
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
                onClick={() => setEnterRowNumber("")}
              >
                Reset Entry
              </Button>
            </HStack>
          </GridItem>
          <GridItem id="row-number-label" colSpan={2} colStart={4}>
            <Flex
              height="5vh"
              bg="#5F9EA0"
              borderRadius="15px"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size="lg" color="white" textAlign="center">
                Row # {displayRowNumber}
              </Heading>
              <Heading
                size="lg"
                color="white"
                textAlign="center"
                id="resume-row-count"
              ></Heading>
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
                onClick={() => setDisplayRowNumber("")}
              >
                Reset Counter
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
