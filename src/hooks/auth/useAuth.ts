import { useQuery } from "react-query";
import authRepository from "../../repository/auth/auth.Repository";

interface Params {
  queries: string;
}

const useAuth = ({ queries }: Params): void => {
  const { data } = useQuery(
    "auth/getLogin",
    () => authRepository.postLogin({ code: queries }),
    { enabled: !!queries }
  );
  console.log(data);
};

export default useAuth;
