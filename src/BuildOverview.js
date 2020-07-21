import React from "react";
import styled from "styled-components";

import BuildStatusLabel from "./BuildStatusLabel";

const BuildOverview = ({ buildStatus}) => (
  <Wrapper>
    <BuildStatusLabel status={buildStatus} />

    <div>
      <DetailTitle>Steps</DetailTitle>
      <DetailValue></DetailValue>
    </div>

    <div>
      <DetailTitle>Start Time</DetailTitle>
      <DetailValue></DetailValue>
    </div>

    <div>
      <DetailTitle>Duration</DetailTitle>
      <DetailValue></DetailValue>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const DetailTitle = styled.div`
  font-weight: bold;
`

const DetailValue = styled.div`
`

export default BuildOverview;
