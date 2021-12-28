import React from "react";
import { Link } from "react-router-dom";

const ProjectInfo = ({ project }) => {
	const { name, description, _id } = project;
	return (
		<div className='row'>
			<div className='col-md'>
				<h3>Project Name</h3>
				<p>{name}</p>
				<Link to={`/dashboard/projects/${_id}`} className='btn btn-link'>
					Details
				</Link>
			</div>

			<div className='col-md'>
				<h3>Project Description</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ProjectInfo;
