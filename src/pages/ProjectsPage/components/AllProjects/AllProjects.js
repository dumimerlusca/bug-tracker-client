import React from "react";
import useProjectsContext from "../../../../context/projects/ProjectsContext";
import { Link } from "react-router-dom";
import ProjectsTable from "../ProjectsTable";

const AllProjects = () => {
	const { projects } = useProjectsContext();

	return (
		<>
			<Link to='/dashboard/projects/createProject' className='btn btn-primary'>
				Create new project
			</Link>
			<div className='mt-5 card shadow'>
				<ProjectsTable projects={projects} />
			</div>
		</>
	);
};

export default AllProjects;
