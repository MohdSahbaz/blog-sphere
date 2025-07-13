import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import LoginUser from "../pages/auth/LoginUser";
import RegisterUser from "../pages/auth/RegisterUser";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginUser />,
      },
      {
        path: "/register",
        element: <RegisterUser />,
      },
    ],
  },
]);

export default router;
