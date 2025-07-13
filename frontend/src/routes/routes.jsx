import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import LoginUser from "../pages/auth/LoginUser";
import RegisterUser from "../pages/auth/RegisterUser";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import BlogDetailsView from "../components/BlogDetailsView";

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
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetailsView />,
      },
    ],
  },
]);

export default router;
