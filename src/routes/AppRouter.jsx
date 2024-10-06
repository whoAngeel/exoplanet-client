import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Minigame from "../pages/Minigame.jsx";
import Quiz from "../pages/Quiz.jsx";
import Index from "../pages/thegame/Index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },

    {
        path: "/logout",
        element: <Logout/>,
    },
    {
        path: "/v2",
        element: <Index/>,
    },

    {
        path: "/minigame",
        element: <Minigame/>,
    },

    {
        path: "/minigame/:quizId",
        element: <Quiz/>
    },

    {
        path: "*",
        element: <Home/>,
    },
]);

function AppRouter() {
    return <RouterProvider router={router}/>;
}

export default AppRouter;
