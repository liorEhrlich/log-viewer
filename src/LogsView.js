import React from "react";
import styled from "styled-components";

const Logs = () => <Wrapper></Wrapper>;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
`;

export default Logs;
