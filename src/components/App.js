import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";

import logs from "../logs.json";
import theme from "../theme";
import BuildOverview from "./BuildOverview";
import StepsList from "./StepsList";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: arial;
  }
`;

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Title>Build Progress View </Title>

      <BuildOverview
        buildStatus={logs.status}
        buildSteps={logs.steps.length}
        buildStart={logs.data.started}
        currentStep={currentStep}
      />

      <StepsList
        stepsList={logs.steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </ThemeProvider>
  );
};

const Title = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 60px;
  color: ${(props) => props.theme.background};
  font-weight: bold;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export default App;
