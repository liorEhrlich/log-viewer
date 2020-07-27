import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Step from "./Step";

const StepsList = ({ stepsList, currentStep, setCurrentStep }) => {
  const [shownSteps, setShownSteps] = useState([]);

  useEffect(function updateShownSteps() {
    setShownSteps([...shownSteps, stepsList[currentStep] ])
  },[currentStep])

  return (
    <Wrapper>
      {shownSteps.map((step) => (
        <Step
          step={step}
          key={step.name}
          onStepComplete={() => setCurrentStep(currentStep + 1)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
`;

export default StepsList;
