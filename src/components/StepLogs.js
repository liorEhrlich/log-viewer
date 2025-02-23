import React, { useEffect, useState } from "react";
import styled from "styled-components";

import streamLogs from "../utils/mockStreamLogsUtil";

const StepLogs = ({ logs, onComplete, isMinimized }) => {
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
        setShownLogs(currentLogs => [...currentLogs, newLog]);
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
    [shownLogs, logs.length]
  );

  return (
    <Wrapper isMinimized={isMinimized}>
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
  display: ${(props) => (props.isMinimized ? "none" : "block")};
`;

const Log = styled.div`
  color: ${(props) => props.theme.terminalText};
  margin-bottom: 5px;
  font-size: 14px;
`;

export default StepLogs;
