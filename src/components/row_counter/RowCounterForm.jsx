import React, { useState } from "react";
import { Grid, FormControl } from "@chakra-ui/react";
import EnterProjectForm from "./EnterProjectForm";
import InteractiveProjectForm from "./InteractiveProjectForm";

const RowCounterForm = () => {
  const [enterRowNumber, setEnterRowNumber] = useState("");
  const [displayRowNumber, setDisplayRowNumber] = useState(enterRowNumber);
  let [savedRowNumber, setSavedRowNumber] = useState(displayRowNumber);
  const [enterProjectName, setEnterProjectName] = useState("");
  const [displayProjectName, setDisplayProjectName] =
    useState(enterProjectName);
  const [retrievedProjectName, setRetrievedProjectName] =
    useState(displayProjectName);
  let [retrievedProjects, setRetrievedProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

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
          <EnterProjectForm
            setDisplayRowNumber={setDisplayRowNumber}
            enterRowNumber={enterRowNumber}
            setDisplayProjectName={setDisplayProjectName}
            enterProjectName={enterProjectName}
            setEnterRowNumber={setEnterRowNumber}
            setEnterProjectName={setEnterProjectName}
          />
          <InteractiveProjectForm
            setDisplayRowNumber={setDisplayRowNumber}
            setDisplayProjectName={setDisplayProjectName}
            setRetrievedProjectName={setRetrievedProjectName}
            setRetrievedProjects={setRetrievedProjects}
            projectId={projectId}
            retrievedProjectName={retrievedProjectName}
            setSavedRowNumber={setSavedRowNumber}
            savedRowNumber={savedRowNumber}
            displayRowNumber={displayRowNumber}
            displayProjectName={displayProjectName}
            setProjectId={setProjectId}
            retrievedProjects={retrievedProjects}
          />
        </Grid>
      </FormControl>
    </>
  );
};

export default RowCounterForm;
