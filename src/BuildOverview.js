import React from "react";
import styled from "styled-components";

import BuildStatusLabel from "./BuildStatusLabel";
import {
  convertEpochToDateString,
  getDurationBetweenEpochTimes,
} from "./utils";

const BuildOverview = ({
  buildStatus,
  buildSteps,
  buildStart,
  buildFinish,
}) => {
  const buildStartTime = convertEpochToDateString(buildStart);
  const buildDuration = getDurationBetweenEpochTimes(buildFinish, buildStart);

  return (
    <Wrapper>
      <BuildStatusLabel status={buildStatus} />

      <Details>
        <DetailTitle>Steps</DetailTitle>
        <DetailValue>{buildSteps}</DetailValue>
      </Details>

      <Details>
        <DetailTitle>Start Time</DetailTitle>
        <DetailValue>{buildStartTime}</DetailValue>
      </Details>

      <Details>
        <DetailTitle>Duration</DetailTitle>
        <DetailValue>{buildDuration}</DetailValue>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  border-bottom: 1px solid ${(props) => props.theme.primary};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Details = styled.div`
  margin-left: 15px;
`;

const DetailTitle = styled.div`
  font-weight: bold;
  text-align: center;
  color: grey;
`;

const DetailValue = styled.div`
  text-align: center;
`;

export default BuildOverview;
