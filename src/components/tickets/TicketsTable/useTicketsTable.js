import { useState, useEffect } from "react";

const useTicketsTable = tickets => {
	const [filteredTickets, setFilteredTickets] = useState([...tickets]);

	useEffect(() => {
		setFilteredTickets([...tickets]);
	}, [tickets]);

	const filterTicketsByPriority = e => {
		if (e.target.textContent === "all") {
			setFilteredTickets([...tickets]);
			return;
		}
		const newArr = tickets.filter(
			ticket => ticket.priority === e.target.textContent
		);
		setFilteredTickets(newArr);
	};

	return { filteredTickets, filterTicketsByPriority };
};

export default useTicketsTable;
