import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

const AuthLoadingPage = () => {
  const { search } = useLocation();
  console.log(search.split("&")[0].slice(6));
  const code = search.split("&")[0].slice(6);

  useAuth({ queries: code });

  return <div>로그인중</div>;
};

export default AuthLoadingPage;
