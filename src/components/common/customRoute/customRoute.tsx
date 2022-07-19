import { ReactNode } from "react";
import { Route } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../../constants/token/token.constants";
import token from "../../../lib/token/token";
import AuthPage from "../../../pages/auth/authPage";

interface Props {
  path: string;
  component: ReactNode;
}

const CustomRoute = ({ path, component }: Props) => {
  return (
    <Route
      path={path}
      element={token.getToken(ACCESS_TOKEN_KEY) ? component : <AuthPage />}
    />
  );
};

export default CustomRoute;
