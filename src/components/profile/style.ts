import styled from "styled-components";
import { sectionBarAnimation } from "../../styles/libStyle";

export const ProfileContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 18px;
  background-color: #f8f8f8;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: ${sectionBarAnimation};
  z-index: 1;
`;

export const ProfileImage = styled.img``;
