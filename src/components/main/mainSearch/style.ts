import styled from "styled-components";

export const MainSearchContainer = styled.form`
  width: 400px;
  height: 50px;
  border-radius: 8px;
  margin-left: 210px;
  background: ${({ theme }) => theme.mainBackground};
  display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 0px 14px;
  justify-content: space-between;
`;

export const MainSearchInput = styled.input`
  width: 100%;
  height: 25px;
  font-size: 15px;
  border: 0px;
  background: none;
  outline: none;
`;

export const MainSearchButton = styled.button`
  min-width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0px;
`;

export const MainSearchButtonIcon = styled.div`
  width: 100%;
  height: 100%;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
