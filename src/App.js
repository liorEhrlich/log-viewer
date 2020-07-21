import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: arial;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Title>Build Progress View </Title>
  </ThemeProvider>
);

const Title = styled.div`
  background-color: ${props => props.theme.primary};
  height: 60px;
  color: ${props => props.theme.background};
  font-weight: bold;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export default App;
