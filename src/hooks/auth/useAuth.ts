import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constants";
import token from "../../lib/token/token";
import authRepository from "../../repository/auth/auth.Repository";

interface Params {
  queries: string;
}

const useAuth = ({ queries }: Params) => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    "auth/getLogin",
    () => authRepository.postLogin({ code: queries }),
    { enabled: !!queries }
  );
  useEffect(() => {
    if (!isLoading && data) {
      const { token: accessToken, refreshToken } = data.data;
      console.log(accessToken, refreshToken);
      token.setToken(ACCESS_TOKEN_KEY, accessToken);
      token.setToken(REFRESH_TOKEN_KEY, refreshToken);
      navigate("/");
    }
  }, [data, isLoading]);
};

export default useAuth;
