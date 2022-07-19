import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../../constants/token/token.constants";
import token from "../../../lib/token/token";
import NavBar from "../navBar/navBar";
import { PageTemplateContainer } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token.getToken(ACCESS_TOKEN_KEY)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [navigate, isLogin]);

  return (
    <PageTemplateContainer>
      {isLogin && <NavBar />}
      {children}
    </PageTemplateContainer>
  );
};

export default PageTemplate;
