import React, { useState } from "react";
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
} from "@chakra-ui/react";

const RowCounterForm = (
  {
    // notes,
    // setNotes,
    // setCells,
    // renderedNotes,
    // setRenderedNotes,
  }
) => {
  // let [qsoNumber, setQsoNumber] = useState(6);
  // const [callSign, setCallSign] = useState("");
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

  return (
    <>
      <FormControl>
        <Grid
          className="stitch-counter-container-grid"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(7, 1fr)"
          gap={5}
          // height={1}
          justifyContent="center"
        >
          <GridItem id="row-counter-form" colSpan={3}>
            <Input
              id="row-number-input"
              placeholder="Enter Row Number"
              size="sm"
              borderRadius="6px"
              border="3px solid"
              borderColor="#A0605F"
              bg="white"
              focusBorderColor="#A05F9E"
              errorBorderColor="#FE1100"
              // value={callSign}
              // onChange={(event) => {
              //   setCallSign(event.target.value);
              // }}
            ></Input>
          </GridItem>
          <GridItem id="submit-row-number" colSpan={2}>
            <Button
              id="submit-row-button"
              type="submit"
              size="sm"
              bg="#A0605F"
              color="white"
              // float="right"
              // onClick={handleSubmit}
            >
              Submit
            </Button>
          </GridItem>
          <GridItem id="reset-row-input" colSpan={2}>
            <Button
              id="reset-row-button"
              type="reset"
              size="sm"
              bg="#A0605F"
              color="white"
              // float="right"
              // onClick={handleSubmit}
            >
              Reset
            </Button>
          </GridItem>
          <GridItem id="row-number-label" colSpan={2}>
         
          <Flex
          // width="30vw"
          height="5vh"
          bg="#A0605F"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" color="#5F9EA0">
            Row #:
          </Heading>
        </Flex>
          </GridItem>
          <GridItem id="row-number-output">
          <Flex height="5vh" borderRadius="15px" border="5px solid #A0605F" justifyContent="center" alignItems="center" color="white">
          <Heading size="lg" flex={1} alignContent="center">6</Heading>
          </Flex>
          </GridItem>
          <GridItem id="incrementor-button-container">
          <Button
              id="incrementor-button"
              type="button"
              size="sm"
              bg="#A0605F"
              color="white"
              // float="right"
              // onClick={handleSubmit}
            >
              +
            </Button>
          </GridItem>
          <GridItem id="decrementor-button-container">
          <Button
              id="decrementor-button"
              type="button"
              size="sm"
              bg="#A0605F"
              color="white"
              // float="right"
              // onClick={handleSubmit}
            >
              -
            </Button>
          </GridItem>
          <GridItem id="save-row-button">
            <Button
              id="save-row-button"
              type="submit"
              size="sm"
              bg="#A0605F"
              color="white"
              // float="right"
              // onClick={handleSubmit}
            >
              Save
            </Button>
          </GridItem>
          <GridItem id="resume-button">
            <Button
              id="resume-counting-button"
              type="button"
              size="sm"
              bg="#A0605F"
              color="white"
              // float="right"
              // onClick={handleSubmit}
            >
              Resume
            </Button>
          </GridItem>
          <GridItem id="reset-row-count-button">
            <Button
              id="reset-row-count"
              type="reset"
              size="sm"
              bg="#A0605F"
              color="white"
              // float="right"
              // onClick={handleSubmit}
            >
              Reset
            </Button>
          </GridItem>
        </Grid>
      </FormControl>
    </>
  );
};

export default RowCounterForm;
