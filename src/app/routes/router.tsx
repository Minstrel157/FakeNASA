import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import PhotoDay from "../../pages/PhotoDay/ui/PhotoDay";
import ErrorPage from "../../pages/ErrorPage/ui/ErrorPage";
import MarsWeather from "../../pages/MarsWeather/ui/MarsWeather";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/dayPhoto",
        element: <PhotoDay/>
    },
    {
        path:"/MarsWeather",
        element: <MarsWeather/>
    }
])