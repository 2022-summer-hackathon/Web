import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f8fa;
`;

export const AuthMidBox = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const DauthLoginBtn = styled.a`
  width: 350px;
  height: 50px;
  background: linear-gradient(90deg, #f1baef, #b8bbff);
  border-radius: 10px;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
