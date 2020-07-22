import React, { useEffect, useState } from "react";
import styled from "styled-components";

import streamLogs from "./utils/mockStreamLogsUtil";

const StepLogs = ({ logs }) => {
  const [shownLogs, setShownLogs] = useState([]);
  const [newLog, setNewLog] = useState("");

  useEffect(function simulateLogsStream() {
    streamLogs(logs, setNewLog);
  }, [logs]);

  useEffect(
    function updateShownLogs() {
      if (newLog) {
        setShownLogs([...shownLogs, newLog]);
      }
    },
    [newLog]
  );

  return (
    <>
      {shownLogs.map((log, index) => (
        <Log key={`${log} ${index}`}>{log}</Log>
      ))}
    </>
  );
};

const Log = styled.div`
  color: dimgrey;
  margin-bottom: 5px;
  padding: 5px;
`;

export default StepLogs;
