import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import RandomCanvas from "../components/Page3D/RandomCanvas";
import FurnitureRoom from "../pages/FurnitureRoom";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:'/three',
                element: <RandomCanvas/>
            },
            {
                path:'/room',
                element: <FurnitureRoom/>
            },
        ]

    },
    // {
    //     path:"/login",
    //     element: <Login/>
    // },
    // {
    //     path:"/register",
    //     element: <Register/>
    // },
])