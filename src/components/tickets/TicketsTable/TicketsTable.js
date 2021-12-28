import React from "react";
import useTicketsTable from "./useTicketsTable";
import PropTypes from "prop-types";
import "./TicketsTable.css";
import TicketsTableRow from "../TicketsTableRow/TicketsTableRow";
import SearchForm from "../../layout/SearchForm/SearchForm";
import FilterByPriorityDropdown from "../FilterByPriorityDropdown/FilterByPriorityDropdown";

const TicketsTable = ({ tickets, showProject }) => {
	const { filteredTickets, filterTicketsByPriority, tableBody } =
		useTicketsTable(tickets);

	return (
		<table className='tickets_table table table-striped table-hover'>
			<thead className='bg-primary text-white p-3'>
				<tr>
					<th>Submitter</th>
					<th style={{ minWidth: "300px" }}>Description</th>
					<th> {showProject ? "Project" : ""} </th>
					<th>
						<FilterByPriorityDropdown
							filterTicketsByPriority={filterTicketsByPriority}
						/>
					</th>
					<th>Developer</th>
					<th>Created at</th>
				</tr>
			</thead>
			<tbody>
				{filteredTickets.map(ticket => {
					return <TicketsTableRow key={ticket._id} ticket={ticket} />;
				})}
			</tbody>
		</table>
	);
};

TicketsTable.propTypes = {
	tickets: PropTypes.array.isRequired,
	showProject: PropTypes.bool,
};

TicketsTable.defaultProps = {
	showProject: true,
};

export default TicketsTable;
