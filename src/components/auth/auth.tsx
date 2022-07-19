import {
  AuthContainer,
  AuthMidBox,
  DauthLoginBtn,
  SignUpBtn,
  SignUpText,
} from "./style";

const Auth = () => {
  return (
    <AuthContainer>
      <AuthMidBox>
        <input type="text" placeholder="아이디를 입력해주세요" />
        <input type="text" placeholder="비밀번호를 입력해주세요" />
        <DauthLoginBtn>Dauth로 로그인</DauthLoginBtn>
        <SignUpText>
          계정이 없으신가요? <SignUpBtn>회원가입</SignUpBtn>
        </SignUpText>
      </AuthMidBox>
    </AuthContainer>
  );
};

export default Auth;
