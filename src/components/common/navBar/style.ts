import styled, { css } from "styled-components";

export const NavBarContainer = styled.div`
  min-width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  background-color: #343434;
  z-index: 2;
`;

export const NavBarIcon = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: scale-down;
  cursor: pointer;
`;

export const NavBarItemWrap = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const NavBarItem = styled.button<{ isSelected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: #f8f8f8;
        `
      : css`
          background: transparent;
        `}
`;

export const NavBarItemIcon = styled.div<{ isSelected: boolean }>`
  width: 36px;
  height: 36px;
  font-size: 36px;
  display: flex;
  align-items: cetner;
  justify-content: center;

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: black;
        `
      : css`
          color: white;
        `}
`;
