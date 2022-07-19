import styled, { css } from "styled-components";

export const NavBarContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  background-color: #343434;
`;

export const NavBarIcon = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: scale-down;
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
  background-color: #f8f8f8;
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isSelected }) => (isSelected ? css`` : css``)}
`;

export const NavBarItemIcon = styled.div<{ isSelected: boolean }>`
  width: 44px;
  height: 44px;
  font-size: 44px;

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: black;
        `
      : css`
          color: white;
        `}
`;
