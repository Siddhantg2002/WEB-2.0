import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "@/Layouts/HomePage";
import ErrorPage from "@/Layouts/ErrorPage";
import Home from "@/Components/Home/Home";
import Blog from "@Components/Blogs/Blog";
import AllBlogs from "@Components/AllBlogs/AllBlogs";

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
        path: "/blogs/:id",
        element: <Blog />
      },
      {
        path: "/blogs",
        element: <AllBlogs/>
      },

    ]
  },
]);

export default routes;
