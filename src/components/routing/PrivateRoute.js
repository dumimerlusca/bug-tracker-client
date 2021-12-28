import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../context/auth/AuthContext";
import Loading from "../Loading";
const PrivateRoute = ({ children }) => {
	const { isAuthenticated, loading } = useAuthContext();

	if (loading) {
		return <Loading />;
	}
	return !isAuthenticated ? <Navigate to='/login' /> : children;
};

export default PrivateRoute;
