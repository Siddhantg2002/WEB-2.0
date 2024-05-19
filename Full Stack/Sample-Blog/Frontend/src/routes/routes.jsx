import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "@/Layouts/HomePage";
import ErrorPage from "@/Layouts/ErrorPage";
import Home from "@/Components/Home/Home";
import Login from "@Components/Login/Login";
import Blog from "@Components/Blogs/Blog";
import AllBlogs from "@Components/AllBlogs/AllBlogs";
import AllBlogsContent from "@Components/Blogs/AllBlogsContent";

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
        path: "/blogs/:page_number",
        element: <AllBlogs/>
      },
      {
        path: "/blogs/:page_number/:id",
        element: <AllBlogsContent/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

export default routes;
