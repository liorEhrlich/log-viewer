import React from "react";
import styled from "styled-components";
import StepLogs from "./StepLogs";

const Step = ({ step }) => {
  return (
    <Wrapper>
      <StepTitle>{step.name} =></StepTitle>
      <StepLogs logs={step.logs} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 200px;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 4px;
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 10px;
  opacity: 0.5;
`;

const StepTitle = styled.div`
  white-space: nowrap;
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid lightgrey;
  border-radius: 4px;
  box-shadow: 10px 10px 21px -17px grey;
`;

export default Step;
