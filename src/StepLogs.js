import React, { useEffect, useState } from "react";
import styled from "styled-components";

import streamLogs from "./utils/mockStreamLogsUtil";

const StepLogs = ({ logs, onComplete }) => {
  const [shownLogs, setShownLogs] = useState([]);
  const [newLog, setNewLog] = useState("");

  useEffect(
    function simulateLogsStream() {
      streamLogs(logs, setNewLog);
    },
    [logs]
  );

  useEffect(
    function updateShownLogs() {
      if (newLog) {
        setShownLogs([...shownLogs, newLog]);
      }
    },
    [newLog]
  );

  useEffect(
    function onCompleteLogsShowing() {
      if (logs.length === shownLogs.length) {
        onComplete();
      }
    },
    [shownLogs]
  );

  return (
    <Wrapper>
      {shownLogs.map((log, index) => (
        <Log key={`${log} ${index}`}>{log}</Log>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.terminalBackground};
  height: 200px;
  overflow-y: scroll;
  padding: 10px;
`;

const Log = styled.div`
  color: ${(props) => props.theme.terminalText};
  margin-bottom: 5px;
  font-size: 14px;
`;

export default StepLogs;
