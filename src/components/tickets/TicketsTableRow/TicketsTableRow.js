import React from "react";
import { useNavigate } from "react-router";
import useAuthContext from "../../../context/auth/AuthContext";
import formatDate from "../../../utils/formatDate";
const TicketsTableRow = ({ ticket }) => {
	const {
		name,
		description,
		submitter,
		createdAt,
		priority,
		status,
		developer,
		project,
		_id,
	} = ticket;
	const navigate = useNavigate();
	const { user } = useAuthContext();

	const handleOnClick = () => {
		navigate(`/dashboard/tickets/${_id}`);
	};

	return (
		<tr
			className='align-items-center'
			onClick={handleOnClick}
			style={{ cursor: "pointer" }}
		>
			<td className='px-3'>{submitter.name}</td>
			<td>
				<div>
					<span
						className={`py-1 px-2 shadow-sm bg-white me-1 fw-bold rounded-pill
            ${status === "submitted" ? "text-dark" : null}
            ${status === "in progress" ? "text-warning" : null}
            ${status === "in review" ? "text-info" : null}
            ${status === "done" ? "text-success" : null}
          `}
					>
						{status}
					</span>
					<span className='ml-3 text-md font-semibold'>
						{name.length > 30 ? `${name.slice(0, 30)}...` : name}
					</span>
				</div>
				<p className='fw-light p-1'>
					{description.length > 30
						? `${description.slice(0, 30)}...`
						: description}
				</p>
			</td>
			<td>{project.name}</td>
			<td>
				<span
					className={`py-1 px-2 rounded-pill
        ${priority === "high" ? "bg-danger text-white" : null}
        ${priority === "medium" ? "bg-warning text-dark" : null}
        ${priority === "low" ? "bg-info text-dark" : null}
        `}
				>
					{priority}
				</span>
			</td>
			<td>{developer ? developer.name : "-"}</td>
			<td>
				{formatDate(createdAt).length > 25
					? `${formatDate(createdAt).slice(0, 25)}... `
					: formatDate(createdAt)}
			</td>
		</tr>
	);
};

export default TicketsTableRow;
