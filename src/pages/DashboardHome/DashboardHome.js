import React, { Fragment } from "react";
import useUsersContext from "../../context/users/UsersContext";
import useProjectsContext from "../../context/projects/ProjectsContext";
import useTicketsContext from "../../context/tickets/TicketsContext";
import AllTickets from "./components/AllTickets/AllTickets";

const DashboardHome = () => {
	const { users } = useUsersContext();
	const { projects } = useProjectsContext();
	const { tickets } = useTicketsContext();

	return (
		<Fragment>
			<h1 className='fw-light text-center'>All tickets</h1>

			<AllTickets />
		</Fragment>
	);
};

export default DashboardHome;
