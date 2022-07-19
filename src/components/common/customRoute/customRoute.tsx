import { ReactNode } from "react";
import { ACCESS_TOKEN_KEY } from "../../../constants/token/token.constants";
import token from "../../../lib/token/token";
import AuthPage from "../../../pages/auth/authPage";

interface Props {
  component: ReactNode;
}

const CustomRoute = ({ component }: Props) => {
  return token.getToken(ACCESS_TOKEN_KEY) ? <>{component}</> : <AuthPage />;
};

export default CustomRoute;
