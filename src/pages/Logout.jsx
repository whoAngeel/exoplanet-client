import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

function Logout() {
	return <Navigate to="/login"></Navigate>;
}

export default Logout;
