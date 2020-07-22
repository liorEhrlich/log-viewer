import React from "react";
import styled from "styled-components";
import StepLogs from "./StepLogs";

const Step = ({ step }) => (
  <Wrapper>
    <StepTitle>{step.name} =></StepTitle>
    <StepLogs logs={step.logs} />
  </Wrapper>
);

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

const StepTitle = styled.div`
  white-space: nowrap;
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid lightgrey;
  border-radius: 4px;
  box-shadow: 10px 10px 21px -17px grey;
`;

export default Step;
