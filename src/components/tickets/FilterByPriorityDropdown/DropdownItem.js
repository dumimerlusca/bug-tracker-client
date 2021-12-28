import React from "react";

const DropdownItem = ({ priority, filterTicketsByPriority }) => {
	return (
		<li
			className='dropdown-item text-capitalize'
			onClick={filterTicketsByPriority}
		>
			{priority}
		</li>
	);
};

export default DropdownItem;
