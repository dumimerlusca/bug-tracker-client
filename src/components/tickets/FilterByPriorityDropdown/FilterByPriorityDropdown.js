import React from "react";
import DropdownItem from "./DropdownItem";

const prioritys = ["high", "medium", "low", "all"];
const FilterByPriorityDropdown = ({ filterTicketsByPriority }) => {
	return (
		<div className='dropdown'>
			<button
				className='btn btn-link text-white fs-5 fw-bold p-0 m-0 text-decoration-none dropdown-toggle'
				type='button'
				data-bs-toggle='dropdown'
			>
				Priority
			</button>
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
