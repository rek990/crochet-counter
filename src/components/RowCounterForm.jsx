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
  let [savedRowNumber, setSavedRowNumber] = useState(displayRowNumber);
  const [enterProjectName, setEnterProjectName] = useState("");
  const [displayProjectName, setDisplayProjectName] =
    useState(enterProjectName);
  const [retrievedProjectName, setRetrievedProjectName] =
    useState(displayProjectName);
  let [retrievedProjects, setRetreivedProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

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

  const handleResetAll = () => {
    setDisplayRowNumber("");
    setDisplayProjectName("");
    setRetrievedProjectName("");
    setRetreivedProjects([]);
  };

  const handleDelete = async () => {
    if (projectId) {
      const res = await fetch(`http://localhost:3000/rowCount/${projectId}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          savedRowCount: savedRowNumber,
          projectName: retrievedProjectName,
        }), // this is how you format what goes in the DELETE request
      });
      const data = await res.json();
      console.log(data);
      setDisplayRowNumber("");
      setDisplayProjectName("");
      setSavedRowNumber("");
      setRetrievedProjectName("");
    } else {
      handleResetAll();
    }
  };

  useEffect(() => {
    handleDelete();
  }, []);

  const handleIncrementor = () => {
    if (savedRowNumber) {
      setSavedRowNumber(+savedRowNumber + 1);
    }
    if (displayRowNumber) {
      setDisplayRowNumber(+displayRowNumber + 1);
    }
  };

  const handleDecrementor = () => {
    if (savedRowNumber && savedRowNumber > 0) {
      setSavedRowNumber(+savedRowNumber - 1);
    }
    if (displayRowNumber && displayRowNumber > 0) {
      setDisplayRowNumber(+displayRowNumber - 1);
    }
  };

  const saveRowCount = async (event) => {
    event.preventDefault();
    // PUT request
    if (projectId) {
      const res = await fetch(`http://localhost:3000/rowCount/${projectId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          savedRowCount: savedRowNumber,
          projectName: retrievedProjectName,
        }), // this is how you format what goes in the PUT request
      });
      const data = await res.json();
      console.log(data);
      setSavedRowNumber(data.savedRowCount);
      setDisplayRowNumber(data.savedRowCount);
      setDisplayProjectName(data.projectName);
      setDisplayRowNumber("");
      setDisplayProjectName("");
      setSavedRowNumber("");
      setRetrievedProjectName("");
    } else {
      // POST request
      const res = await fetch("http://localhost:3000/rowCount", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          savedRowCount: displayRowNumber,
          projectName: displayProjectName,
        }), // this is how you format what goes in the POST request
      });
      const data = await res.json();
      console.log(data);
      setSavedRowNumber(data.savedRowCount);
      setDisplayRowNumber(data.savedRowCount);
      setDisplayProjectName(data.projectName);
      setDisplayRowNumber("");
      setDisplayProjectName("");
    }
  };

  useEffect(() => {
    saveRowCount();
  }, []);

  const resumeRowCount = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/rowCount");
    const data = await res.json();
    console.log(data);
    setRetreivedProjects(data);
    setRetrievedProjectName(retrievedProjectName);
    data.map((row, index) => {
      if (data[index].projectName === retrievedProjectName) {
        row = data[index].savedRowCount;
        setSavedRowNumber(row);
      }
    });
    data.map((id, index) => {
      if (data[index].projectName === retrievedProjectName) {
        id = data[index].id;
        setProjectId(id);
      }
    });
  };

  useEffect(() => {
    resumeRowCount(() => {});
  }, []);

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
          <GridItem id="retrieve-project-form" colSpan={2}>
            <Input
              id="retrieve-project-input"
              placeholder="Retrieved Project"
              size="sm"
              borderRadius="6px"
              border="3px solid"
              borderColor="#5F9EA0"
              bg="white"
              focusBorderColor="#A05F9E"
              errorBorderColor="#FE1100"
              value={retrievedProjectName}
              onChange={(event) => {
                setRetrievedProjectName(event.target.value);
              }}
            ></Input>
          </GridItem>
          <GridItem>
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
          </GridItem>
          <GridItem id="project-name-label" colSpan={2}>
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
                <b>Project:&nbsp;{displayProjectName}</b>
              </Text>
              {retrievedProjects.map((data, index) => {
                return (
                  <>
                    <Text
                      color="white"
                      textAlign="center"
                      className="display-project-name"
                      key={index}
                    >
                      <b>
                        {data.projectName === retrievedProjectName
                          ? data.projectName
                          : null}
                      </b>
                    </Text>
                  </>
                );
              })}
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
                Row #&nbsp;{displayRowNumber}
              </Heading>
              {retrievedProjects.map((data, index) => {
                return (
                  <>
                    <Heading
                      size="lg"
                      color="white"
                      textAlign="center"
                      className="display-row-count"
                      key={index}
                    >
                      {data.projectName === retrievedProjectName
                        ? savedRowNumber
                        : null}
                    </Heading>
                  </>
                );
              })}
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
                id="reset-row-count"
                type="reset"
                size="sm"
                bg="#5F9EA0"
                color="white"
                onClick={handleResetAll}
              >
                Reset
              </Button>
              <Button
                id="delete-entry"
                type="reset"
                size="sm"
                bg="#5F9EA0"
                color="white"
                onClick={handleDelete}
              >
                Delete
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
