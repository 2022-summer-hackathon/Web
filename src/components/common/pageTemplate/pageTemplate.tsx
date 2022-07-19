import { ReactNode } from "react";
import { ACCESS_TOKEN_KEY } from "../../../constants/token/token.constants";
import token from "../../../lib/token/token";
import NavBar from "../navBar/navBar";
import { PageTemplateContainer } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      {token.getToken(ACCESS_TOKEN_KEY) && <NavBar />}
      {children}
    </PageTemplateContainer>
  );
};

export default PageTemplate;
