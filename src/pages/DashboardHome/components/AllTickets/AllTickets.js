import React, { Fragment } from "react";
import useTicketsContext from "../../../../context/tickets/TicketsContext";
import TicketsTable from "../../../../components/tickets/TicketsTable/TicketsTable";
import SearchForm from "../../../../components/layout/SearchForm/SearchForm";

const AllTickets = () => {
	const { tickets } = useTicketsContext();

	return (
		<Fragment>
			<div className='row mb-3'>
				<div className='col-md-6'>
					<SearchForm />
				</div>
			</div>
			<TicketsTable tickets={tickets} />
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

export default AllTickets;
