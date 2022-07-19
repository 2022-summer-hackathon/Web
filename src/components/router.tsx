import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import ProfilePage from "../pages/profile/profilePage";
import CustomRoute from "./common/customRoute/customRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomRoute component={<HomePage />} />} />
      <Route
        path="/profile/:id"
        element={<CustomRoute component={<ProfilePage />} />}
      />
    </Routes>
  );
};

export default Router;
