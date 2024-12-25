import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import { loggedIn } from "../assets/js/utlis";

const Home = lazy((_) => import("../pages/home/Home"));
const Login = lazy((_) => import("../pages/login/Login"));
const Registration = lazy((_) => import("../pages/signup/Registration"));
const Profile = lazy((_) => import("../pages/profile/Profile.jsx"));
const About = lazy(()=> import("../pages/about/About.jsx"))

const useRoutesHook = () => {
  const isLogin = loggedIn();
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    { path: "/registration", element: <Registration /> },
    { path: "/profile", element: isLogin ? <Profile /> : <Home /> },
  ]);
  return routes;
};
export default useRoutesHook;
