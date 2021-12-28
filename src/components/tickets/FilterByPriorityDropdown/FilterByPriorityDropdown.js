import React from "react";
import DropdownItem from "./DropdownItem";

const prioritys = ["high", "medium", "low", "all"];
const FilterByPriorityDropdown = ({ filterTicketsByPriority }) => {
	return (
		<div className='dropdown'>
			<a
				className='text-decoration-none text-white dropdown-toggle'
				type='button'
				data-bs-toggle='dropdown'
			>
				Priority
			</a>
			<ul className='dropdown-menu collapse'>
				{prioritys.map((priority, index) => {
					return (
						<DropdownItem
							key={index}
							priority={priority}
							filterTicketsByPriority={filterTicketsByPriority}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default FilterByPriorityDropdown;
