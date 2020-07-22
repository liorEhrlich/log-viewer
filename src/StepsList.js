import React from "react";
import styled from "styled-components";

import Step from "./Step";

const StepsList = ({ stepsList }) => (
  <Wrapper>
    {stepsList.map((step) => (
      <Step step={step} key={step.name}/>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
`;

export default StepsList;
