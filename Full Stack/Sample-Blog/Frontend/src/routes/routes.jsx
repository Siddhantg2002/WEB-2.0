import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "@/Layouts/HomePage";
import ErrorPage from "@/Layouts/ErrorPage";
import Home from "@/Components/Home/Home";
import Login from "@Components/Login/Login";
import Blog from "@Components/Blogs/Blog";
import AllBlogs from "@Components/AllBlogs/AllBlogs";
import AllBlogsContent from "@Components/Blogs/AllBlogsContent";
import Signup from "@Components/Signup/Signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blogs/blog/:id",
        element: <Blog />
      },
      {
        path: "/blogs/:page",
        element: <AllBlogs/>
      },
      {
        path: "/blogs/:page/:id",
        element: <AllBlogsContent/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/sign-up",
    element: <Signup/>,
  }
]);

export default routes;
