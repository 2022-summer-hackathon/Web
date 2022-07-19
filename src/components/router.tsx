import { Route, Routes } from "react-router-dom";
import AuthLoadingPage from "../pages/auth/authLoadingPage";
import HomePage from "../pages/home/homePage";
import ProfilePage from "../pages/profile/profilePage";
import CustomRoute from "./common/customRoute/customRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomRoute component={<HomePage />} />} />
      <Route
        path="/profile"
        element={<CustomRoute component={<ProfilePage />} />}
      />
      <Route path="/authloading" element={<AuthLoadingPage />} />
    </Routes>
  );
};

export default Router;
