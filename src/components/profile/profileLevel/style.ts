import styled from "styled-components";

export const ProfileLevelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  margin-top: 36px;
`;

export const ProfileLevelText = styled.span`
  font-size: 14px;
  color: #5a5a5a;
`;

export const ProfileLevelChartWrap = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 4px;
  background-color: #dadada;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ProfileLevelChart = styled.div<{ experience: number }>`
  width: ${({ experience }) => experience}%;
  height: 100%;
  background: ${({ theme }) => theme.mainBackground};
`;
