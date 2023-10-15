import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Favorites from "../Pages/Favorites";
import LogIn from "../Pages/LogIn";



const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/phone.json')
            },
            {
                path: "/favorites",
                element: <Favorites></Favorites>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            
        ]
    }
]);

export default myCreatedRouter;