import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "@/Layouts/HomePage";
import ErrorPage from "@/Layouts/ErrorPage";
import Home from "@/Components/Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }

])

export default routes