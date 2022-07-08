import {
    Grid,
    GridItem,
    Input,
    Select,
    Textarea,
    Button,
  } from "@chakra-ui/react";

  const RowCounterForm = ({
    notes,
    setNotes,
    setCells,
    renderedNotes,
    setRenderedNotes,
  }) => {
    let [qsoNumber, setQsoNumber] = useState(6);
    const [callSign, setCallSign] = useState("");
    const [qsoDate, setQsoDate] = useState("");
    const [qsoTime, setQsoTime] = useState("");
    const [meterBand, setMeterBand] = useState(null);
    const [modeNames, setModeNames] = useState(null);
    const [frequencyValues, setFrequencyValues] = useState(null);
    const [power, setPower] = useState("");
    const [signalSent, setSignalSent] = useState("");
    const [signalReceived, setSignalReceived] = useState("");
    const [operatorName, setOperatorName] = useState("");
    const [country, setCountry] = useState("");
    const [id, setId] = useState(0);
    const [qsoData, setQsoData] = useState([]);
  
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
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // these values need to be transferred to the QSOHistoryTable and to a data base (via POST request). See p. 58, green spiral NB, 3.1.2022 for more info
      const qsoDataPerContact = {
        // note that there will need to be a filter on this by call sign
        callSign: callSign,
        qsoDate: qsoDate,
        qsoTime: qsoTime,
        band: meterBand,
        mode: modeNames,
        frequency: frequencyValues,
        // power: power,
        // sent: signalSent,
        // received: signalReceived,
        notes: notes,
        qsoNumber: qsoNumber,
        // name: operatorName,
      };
      console.log(qsoDataPerContact.notes);
  
      const response = await fetch("http://localhost:3000/qsoHistory", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        // adds resource to be stored
        body: JSON.stringify(qsoDataPerContact),
      });
      const data = await response.json();
      console.log(data);
      setQsoData(qsoDataPerContact);
      /*.then((response) => response.json())
        .then((qsoDataPerContact) => {
        console.log(qsoDataPerContact);*/
      console.log(qsoNumber);
      setQsoNumber(qsoNumber + 1);
      console.log(qsoNumber);
      /*console.log("callSign", callSign);
          console.log("qsoDate", qsoDate);
          console.log("qsoTime", qsoTime);
          console.log("power", power);
          console.log("signalSent", signalSent);
          console.log("signalReceived", signalReceived);
          console.log("notes", notes);
          console.log("meterBand", meterBand);
          console.log("modeNames", modeNames);
          console.log("frequencyValues", frequencyValues);*/
      setCallSign("");
      setQsoDate("");
      setQsoTime("");
      setPower("");
      setSignalSent("");
      setSignalReceived("");
      setRenderedNotes(notes);
      console.log("renderedNotes", renderedNotes);
      setNotes("");
      console.log(renderedNotes);
      setMeterBand("");
      setModeNames("");
      setFrequencyValues("");
    };
  
    useEffect(() => {
      handleSubmit();
    }, []);
    console.log(qsoData);
    return (
      <>
        <Grid
          className="log-qso-container-grid"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={5}
          height={1}
        >
          <GridItem id="call-sign-input" colSpan={2}>
            <Input
              id="call-sign"
              placeholder="Call Sign"
              size="sm"
              borderRadius="6px"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              value={callSign}
              onChange={(event) => {
                setCallSign(event.target.value);
              }}
            ></Input>
          </GridItem>
          <GridItem id="date-input">
            <Input
              placeholder="Date"
              size="sm"
              borderRadius="6px"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              value={qsoDate}
              onChange={(event) => {
                setQsoDate(event.target.value);
              }}
            ></Input>
          </GridItem>
          <GridItem id="time-input">
            <Input
              placeholder="Time (UTC)"
              size="sm"
              borderRadius="6px"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              value={qsoTime}
              onChange={(event) => {
                setQsoTime(event.target.value);
              }}
            ></Input>
          </GridItem>
          <GridItem id="band-dropdown-menu" colSpan={2}>
            <Select
              placeholder="Band"
              value={meterBand}
              size="sm"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              borderRadius="6px"
              onChange={(event) => {
                setMeterBand(event.target.value);
              }}
            >
              {BAND.map((meter, index) => {
                return (
                  <>
                    <option key={index} value={meter.band}>
                      {meter.band}
                    </option>
                  </>
                );
              })}
            </Select>
          </GridItem>
          <GridItem id="mode-dropdown-menu" colSpan={2}>
            <Select
              placeholder="Mode"
              value={modeNames}
              size="sm"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              borderRadius="6px"
              onChange={(event) => {
                setModeNames(event.target.value);
              }}
            >
              {MODE.map((modeName, index) => {
                return (
                  <>
                    <option key={index} value={modeName.mode}>
                      {modeName.mode}
                    </option>
                  </>
                );
              })}
            </Select>
          </GridItem>
          <GridItem id="frequency-input">
            <Select
              placeholder="Frequency"
              value={frequencyValues}
              size="sm"
              borderRadius="6px"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              onChange={(event) => {
                setFrequencyValues(event.target.value);
              }}
            >
              {FREQUENCY.map((frequencyValue, index) => {
                return (
                  <>
                    <option key={index} value={frequencyValue.frequency}>
                      {frequencyValue.frequency}
                    </option>
                  </>
                );
              })}
            </Select>
          </GridItem>
          <GridItem id="power-input">
            <Input
              placeholder="Power (W)"
              size="sm"
              borderRadius="6px"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              value={power}
              onChange={(event) => {
                setPower(event.target.value);
              }}
            ></Input>
          </GridItem>
          <GridItem id="sent-signal-input">
            <Input
              placeholder="Sent"
              size="sm"
              borderRadius="6px"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              value={signalSent}
              onChange={(event) => {
                setSignalSent(event.target.value);
              }}
            ></Input>
          </GridItem>
          <GridItem id="received-signal-input">
            <Input
              placeholder="Received"
              size="sm"
              borderRadius="6px"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              value={signalReceived}
              onChange={(event) => {
                setSignalReceived(event.target.value);
              }}
            ></Input>
          </GridItem>
          <GridItem id="notes" colSpan={4}>
            <Textarea
              placeholder="Notes"
              size="sm"
              borderRadius="6px"
              border="2px solid"
              borderColor="#FE875D"
              bg="white"
              focusBorderColor="#356288"
              errorBorderColor="#FE1100"
              value={notes}
              onChange={(event) => {
                setNotes(event.target.value);
              }}
            ></Textarea>
          </GridItem>
          <GridItem id="submit-button" colStart={4} colEnd={4}>
            <Button
              id="submit-new-qso"
              type="submit"
              size="sm"
              bg="#FE875D"
              color="white"
              float="right"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            {/*<Button
                id="update-qso-history-table"
                size="sm"
                bg="#FE875D"
                color="white"
                float="right"
                onClick={getData}
              >
                Update Table
              </Button>*/}
          </GridItem>
        </Grid>
      </>
    );
  };
  
  export default RowCounterForm;