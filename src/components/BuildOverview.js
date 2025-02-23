import React from "react";
import styled from "styled-components";

import StatusLabel from "./StatusLabel";
import {
  convertEpochToDateString,
} from "../utils/utils";
import {STEP_STATUSES} from "../constants";

const BuildOverview = ({
  buildStatus,
  buildSteps,
  buildStart,
  currentStep,
}) => {
  const buildStartTime = convertEpochToDateString(buildStart);

  return (
    <Wrapper>
      <StatusLabel status={currentStep + 1 === buildSteps ? buildStatus : STEP_STATUSES['running']} />

      <Details>
        <DetailTitle>Steps</DetailTitle>
        <DetailValue>{`${currentStep + 1} / ${buildSteps}`}</DetailValue>
      </Details>

      <Details>
        <DetailTitle>Start Time</DetailTitle>
        <DetailValue>{buildStartTime}</DetailValue>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.primary};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: ${props => props.theme.secondaryBackground};
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
