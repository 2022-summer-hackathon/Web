import styled, { css } from "styled-components";

export const PostingButtonContainer = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 35px;
  right: 35px;
  background: linear-gradient(180deg, #f1baef 0%, #b8bbff 100%);
  border: 0px;
  z-index: 2;
`;

export const PostingButtonIcon = styled.div<{ isClick: boolean }>`
  width: 70px;
  height: 70px;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  ${({ isClick }) =>
    isClick
      ? css`
          transform: rotate(45deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;
