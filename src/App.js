import "./App.css";
import "./Media.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Tickets from "./pages/Tickets";
import ManageRolesPage from "./pages/ManageRolesPage/ManageRolesPage";
import AdminOnly from "./components/routing/AdminOnly";
import Home from "./pages/Home";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import UserProfile from "./pages/UserProfile";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/' element={<Home />} />
				<Route
					path='/dashboard/*'
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				>
					<Route path='' element={<DashboardHome />} />
					<Route path='projects/*' element={<ProjectsPage />} />
					<Route
						path='manageRoles/*'
						element={
							<AdminOnly>
								<ManageRolesPage />
							</AdminOnly>
						}
					/>
					<Route path='tickets/*' element={<Tickets />} />
					<Route path='userProfile' element={<UserProfile />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
