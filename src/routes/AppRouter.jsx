import React from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Index from "../pages/thegame/Index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},

	{
		path: "/logout",
		element: <Logout />,
	},
	{
		path: "/v2",
		element: <Index />,
	},

	{
		path: "*",
		element: <Home />,
	},
]);

function AppRouter() {
	return <RouterProvider router={router} />;
}

export default AppRouter;
