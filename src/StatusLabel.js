import React from "react";
import styled from "styled-components";

const StatusLabel = ({ status }) => (
  <Wrapper status={status}>{status}</Wrapper>
);

const Wrapper = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-color: ${(props) => props.theme[props.status]};
  color: ${(props) => props.theme.background};
  padding: 5px 10px;
`;

export default StatusLabel;
