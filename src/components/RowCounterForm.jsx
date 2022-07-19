import React, { useState, useEffect } from "react";
import {
  Grid,
  GridItem,
  Input,
  Select,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Flex,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const RowCounterForm = () => {
  // let [qsoNumber, setQsoNumber] = useState(6);

  // const [qsoDate, setQsoDate] = useState("");
  // const [qsoTime, setQsoTime] = useState("");
  // const [meterBand, setMeterBand] = useState(null);
  // const [modeNames, setModeNames] = useState(null);
  // const [frequencyValues, setFrequencyValues] = useState(null);
  // const [power, setPower] = useState("");
  // const [signalSent, setSignalSent] = useState("");
  // const [signalReceived, setSignalReceived] = useState("");
  // const [operatorName, setOperatorName] = useState("");
  // const [country, setCountry] = useState("");
  // const [id, setId] = useState(0);
  // const [qsoData, setQsoData] = useState([]);

  /*const getData = useCallback(async () => {
      const resp = await fetch("http://localhost:3000/qsoHistory");
      const data = await resp.json();
      const loadedQSOs = [];
      for (const key in data) {
        loadedQSOs.push({
          id: key,
          qsoNumber: data[key].qsoNumber,
          qsoDate: data[key].qsoDate,
          qsoTime: data[key].qsoTime,
          band: data[key].band,
          frequency: data[key].frequency,
          mode: data[key].mode,
          notes: data[key].notes,
        });
      }
      console.log(data);
      //setCells(data);
      setCells(loadedQSOs);
    });*/

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const qsoDataPerContact = {

  //     callSign: callSign,
  //     qsoDate: qsoDate,
  //     qsoTime: qsoTime,
  //     band: meterBand,
  //     mode: modeNames,
  //     frequency: frequencyValues,
  //     notes: notes,
  //     qsoNumber: qsoNumber,
  //   };
  //   console.log(qsoDataPerContact.notes);

  //   const response = await fetch("http://localhost:3000/qsoHistory", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(qsoDataPerContact),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   setQsoData(qsoDataPerContact);
  //   console.log(qsoNumber);
  //   setQsoNumber(qsoNumber + 1);
  //   console.log(qsoNumber);
  //   setCallSign("");
  //   setQsoDate("");
  //   setQsoTime("");
  //   setPower("");
  //   setSignalSent("");
  //   setSignalReceived("");
  //   setRenderedNotes(notes);
  //   console.log("renderedNotes", renderedNotes);
  //   setNotes("");
  //   console.log(renderedNotes);
  //   setMeterBand("");
  //   setModeNames("");
  //   setFrequencyValues("");
  // };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);
  // console.log(qsoData);

  const [enterRowNumber, setEnterRowNumber] = useState("");
  const [displayRowNumber, setDisplayRowNumber] = useState(enterRowNumber);

  const handleSubmit = () => {
    setDisplayRowNumber(enterRowNumber); // similar to document.getElementById("row-heading-number").innerText = enterRowNumber;
    console.log("displayRowNumberSubmit", displayRowNumber);
    console.log(typeof displayRowNumber);
    console.log(typeof displayRowNumber);
    setEnterRowNumber("");
  };

  const handleIncrementor = () => {
    setDisplayRowNumber(+displayRowNumber + 1);
    console.log("displayRowNumberIncrement", displayRowNumber);
  };

  const handleDecrementor = () => {
    if (displayRowNumber > 0) {
      setDisplayRowNumber(+displayRowNumber - 1);
    } else {
      setDisplayRowNumber(0);
    }
    console.log("displayRowNumberIncrement", displayRowNumber);
  };

  const saveRowCount = () => {
    // click Save button
    // this will eventually become a POST request (start with JSON server and take it from there)
    // for now, log the saved row count to the console
  };

  const resumeRowCount = () => {
    // click Resume button
    // this will eventually become a GET request (start with JSON server and take it from there)
  }

  return (
    <>
      <FormControl>
        <Grid
          className="stitch-counter-container-grid"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap={5}
          // height={1}
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
                // float="right"
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
                // float="right"
                onClick={() => setEnterRowNumber("")}
              >
                Reset Entry
              </Button>
            </HStack>
          </GridItem>
          <GridItem id="reset-row-input" colSpan={2}>
            {/* <Button
              id="reset-row-button"
              type="reset"
              size="sm"
              bg="#5F9EA0"
              color="white"
              // float="right"
              // onClick={handleSubmit}
            >
              Reset Entry
            </Button> */}
          </GridItem>
          <GridItem id="row-number-label" colSpan={2} colStart={4}>
            <Flex
              // width="30vw"
              height="5vh"
              bg="#5F9EA0"
              borderRadius="15px"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size="lg" color="white">
                Row # {displayRowNumber}
              </Heading>
            </Flex>
          </GridItem>
          {/* <GridItem id="row-number-output">
            <Flex
              height="5vh"
              borderRadius="15px"
              border="5px solid #5F9EA0"
              justifyContent="center"
              alignItems="center"
              color="white"
            >
              <Heading size="lg" flex={1} textAlign="center">
                6
              </Heading>
            </Flex>
          </GridItem> */}
          <GridItem id="stitch-counter-buttons">
            <HStack>
              <Button
                id="incrementor-button"
                type="button"
                size="sm"
                bg="#5F9EA0"
                color="white"
                // float="right"
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
                // float="right"
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
                // float="right"
                // onClick={handleSubmit}
              >
                Save
              </Button>
              <Button
                id="resume-counting-button"
                type="button"
                size="sm"
                bg="#5F9EA0"
                color="white"
                // float="right"
                // onClick={handleSubmit}
              >
                Resume
              </Button>
              <Button
                id="reset-row-count"
                type="reset"
                size="sm"
                bg="#5F9EA0"
                color="white"
                // float="right"
                onClick={() => setDisplayRowNumber(0)}
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
