import styled from "styled-components";
import { sectionBarAnimation } from "../../styles/libStyle";

export const ProfileContainer = styled.div`
  min-width: 300px;
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

export const ProfileImgWrap = styled.div`
  width: 124px;
  min-height: 124px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;
  background-color: black;
`;

export const ProfileImg = styled.img`
  width: 100%;
  object-fit: scale-down;
`;

export const ProfileName = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #5a5a5a;
  margin-top: 17px;
`;

export const ProfileMyPostingWrap = styled.div`
  width: 100%;
  height: 760px;
  max-height: 760px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
