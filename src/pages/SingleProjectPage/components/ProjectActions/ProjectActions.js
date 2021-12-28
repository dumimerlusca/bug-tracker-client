import React from "react";
import useProjectAction from "./useProjectAction";
import { Link } from "react-router-dom";

const ProjectActions = ({ currentProject }) => {
	const { handleEditProject, handleDeleteProject, user } =
		useProjectAction(currentProject);

	return (
		<div className='d-flex gap-3 mt-2'>
			{(user.role === "admin" ||
				user.role === "project manager" ||
				user.role === "adminDemo") && (
				<button className='btn btn-success' onClick={handleEditProject}>
					Edit
				</button>
			)}
			{(user.role === "admin" || user.role === "adminDemo") && (
				<button className='btn btn-danger' onClick={handleDeleteProject}>
					Delete
				</button>
			)}
			{(user.role === "admin" ||
				user.role === "project manager" ||
				user.role === "adminDemo") && (
				<Link
					to={`/dashboard/projects/${currentProject._id}/manageUsers`}
					className='btn btn-info'
				>
					Manage users
				</Link>
			)}
			<button
				className='btn btn-secondary'
				data-bs-toggle='modal'
				data-bs-target='#addTicketFormModal'
			>
				Add new ticket
			</button>
		</div>
	);
};

export default ProjectActions;
