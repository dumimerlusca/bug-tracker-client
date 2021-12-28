import React, { Fragment, useEffect, useState } from "react";
import SideMenu from "../components/layout/SideMenu/SideMenu";
import DashboardHeader from "../components/layout/DashboardHeader/DashboardHeader";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import useUsersContext from "../context/users/UsersContext";
import useProjectsContext from "../context/projects/ProjectsContext";
import useTicketsContext from "../context/tickets/TicketsContext";
import Loading from "../components/Loading";
import useAuthContext from "../context/auth/AuthContext";
import BackAndForwardNavigation from "../components/layout/BackAndForwardNavigation/BackAndForwardNavigation";

const Dashboard = () => {
	const navigate = useNavigate();
	const { getUsers } = useUsersContext();
	const { getProjects, getMyProjects } = useProjectsContext();
	const { getTickets, getMyTickets } = useTicketsContext();
	const { user } = useAuthContext();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await getUsers();
		await getProjects();
		await getTickets();
		await getMyTickets(user._id);
		await getMyProjects(user._id);
		setLoading(false);
	};

	if (loading) {
		return <Loading />;
	}
	return (
		<Fragment>
			<SideMenu />
			<div className='main_container'>
				<DashboardHeader />
				<BackAndForwardNavigation />
				<div className='container'>
					<Outlet />
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
