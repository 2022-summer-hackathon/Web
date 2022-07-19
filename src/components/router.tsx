import { Routes } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import CustomRoute from "./common/customRoute/customRoute";
import Profile from "./profile/profile";

const Router = () => {
  return (
    <Routes>
      <CustomRoute path="/" component={<HomePage />} />
      <CustomRoute path="/profile/:id" component={<Profile />} />
    </Routes>
  );
};

export default Router;
