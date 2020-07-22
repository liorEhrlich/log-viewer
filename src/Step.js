import React, { useState } from "react";
import styled from "styled-components";
import StepLogs from "./StepLogs";
import { STEP_STATUSES } from "./constants";
import StatusLabel from "./StatusLabel";

const Step = ({ step, onStepComplete }) => {
  const [stepStatus, setStepStatus] = useState(STEP_STATUSES["running"]);
  const [areLogsMinimized, setAreLogsMinimized] = useState(false);

  const onStepCompleteUpdateStatus = () => {
    onStepComplete();
    setStepStatus(step.status);
  };
  return (
    <Wrapper>
      <StatusLabel status={STEP_STATUSES[stepStatus]}>{stepStatus}</StatusLabel>

      <StepTitle>
        <MinimizeLogs
          onClick={() =>
            setAreLogsMinimized((areLogsMinimized) => !areLogsMinimized)
          }
        >
          {areLogsMinimized ? "+" : "-"}
        </MinimizeLogs>
        {step.name} =>
      </StepTitle>

      <StepLogs logs={step.logs} onComplete={onStepCompleteUpdateStatus} isMinimized={areLogsMinimized}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 4px;
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 10px;

  :hover {
    box-shadow: 3px 0px 16px -2px ${(props) => props.theme.primary};
  }
`;

const MinimizeLogs = styled.div`
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  cursor: pointer;
`;

const StepTitle = styled.div`
  white-space: nowrap;
  margin-bottom: 15px;
  margin-top: 10px;
  padding: 15px;
  border: 2px solid lightgrey;
  border-radius: 4px;
  box-shadow: 10px 10px 21px -17px grey;
`;

export default Step;
