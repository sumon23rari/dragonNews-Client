import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import Catagory from "../pages/Catagory/Catagory/Catagory";
import News from "../pages/News/News/News";
import Register from "../pages/LogIn/Register/Register";
import LogIn from "../pages/LogIn/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Terms from "../pages/Others/Terms/Terms";
import Profiles from "../pages/Others/Profiles/Profiles";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
    
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`    https://dragon-new-server-one.vercel.app/news`)
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`    https://dragon-new-server-one.vercel.app/catagory/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News> </PrivateRoute>,
                loader: ({ params }) => fetch(`    https://dragon-new-server-one.vercel.app/news/${params.id}`)
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path:"/terms",
                element:<Terms></Terms>
            },
            {
                path:"/profile",
                element:<PrivateRoute><Profiles></Profiles></PrivateRoute>
            }

        ]
    }
])