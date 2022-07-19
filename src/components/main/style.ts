import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const MainWrap = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainFeedWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
