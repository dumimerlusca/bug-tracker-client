import React, { Fragment } from "react";
import useTicketsContext from "../../context/tickets/TicketsContext";
import TicketsTable from "./TicketsTable/TicketsTable";
import PageTitle from "../layout/PageTitle/PageTitle";

const MyTickets = () => {
	const { myTickets } = useTicketsContext();

	return (
		<Fragment>
			<PageTitle>My tickets</PageTitle>
			<TicketsTable tickets={myTickets} />
			<nav aria-label='Page navigation example'>
				<ul className='pagination justify-content-center'>
					<li className='page-item'>
						<button className='page-link'>Previous</button>
					</li>
					<li className='page-item'>
						<button className='page-link'>1</button>
					</li>
					<li className='page-item'>
						<button className='page-link'>2</button>
					</li>
					<li className='page-item'>
						<button className='page-link'>3</button>
					</li>
					<li className='page-item'>
						<button className='page-link'>Next</button>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default MyTickets;
