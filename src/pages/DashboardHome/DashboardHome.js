import React, { Fragment } from "react";
import AllTickets from "./components/AllTickets/AllTickets";

const DashboardHome = () => {
	return (
		<Fragment>
			<h1 className='fw-light text-center'>All tickets</h1>

			<AllTickets />
		</Fragment>
	);
};

export default DashboardHome;
