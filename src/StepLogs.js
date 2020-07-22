import React from 'react';
import styled from "styled-components";

const StepLogs = ({logs}) => (
    <>{logs.map((log, index) => <Log key={`${log} ${index}`}>{log}</Log>)}</>
);

const Log = styled.div`
  color: dimgrey;
  margin-bottom: 5px;
`;

export default StepLogs;