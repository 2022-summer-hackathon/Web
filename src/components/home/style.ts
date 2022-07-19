import styled from "styled-components";
import { sectionBarAnimation } from "../../styles/libStyle";

export const HomeContainer = styled.div`
  min-width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  background-color: #f8f8f8;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: ${sectionBarAnimation};
  z-index: 1;
  padding: 30px 40px;
  row-gap: 14px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
