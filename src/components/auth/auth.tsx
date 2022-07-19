import { AuthContainer, AuthMidBox, DauthLoginBtn } from "./style";
import LogoDetail from "../assets/icon/logo2.svg";
import NewPost from "../common/post/newPost";

const Auth = () => {
  return (
    <AuthContainer>
      <img src={LogoDetail} alt="로고입니다" />
      <span>쉽고 간편한 무비니티 로그인</span>
      <AuthMidBox>
        <DauthLoginBtn
          href={`http://dauth.b1nd.com/login?client_id=fbb1bcdff1c54463b1f25ba24154ff5b9a054182571c4896bc0f4dc3fb2d5acd&redirect_uri=http://localhost:3000/authloading`}
        >
          Dauth로 로그인
        </DauthLoginBtn>
      </AuthMidBox>
    </AuthContainer>
  );
};

export default Auth;
