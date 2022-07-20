import styled, { css, keyframes } from "styled-components";

export const LoaderContainer = styled.div<{ isAbsolute: boolean }>`
  width: 84px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7f7f7f;
  z-index: 10px;
  border-radius: 100%;

  ${({ isAbsolute }) =>
    isAbsolute &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `};
`;

export const LoaderSpin = keyframes`
    to {
    -webkit-transform: rotate(360deg);
  }
`;

export const LoaderItem = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid black;
  border-radius: 50%;
  border-top-color: #fff;
  animation: ${LoaderSpin} 1s ease-in-out infinite;
`;
