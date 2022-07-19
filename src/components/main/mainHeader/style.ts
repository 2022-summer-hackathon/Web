import styled from "styled-components";

export const MainHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 15px 0px;
`;

export const MainHeaderLogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainHeaderLogo = styled.img`
  width: 280px;
  object-fit: scale-down;
`;

export const MainHeaderLogoText = styled.p`
  font-size: 14px;
  color: black;
`;
