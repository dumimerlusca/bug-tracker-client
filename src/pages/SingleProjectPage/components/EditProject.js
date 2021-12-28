import React, { useState, useEffect } from "react";
import useProjectsContext from "../../../context/projects/ProjectsContext";
import Loading from "../../../components/Loading";
import useAlertContext from "../../../context/alert/AlertContext";
import Alert from "../../../components/layout/Alert/Alert";
import { useParams } from "react-router-dom";

const EditProject = () => {
	const { updateProject, loading, alert, clearAlerts, currentProject } =
		useProjectsContext();
	const { setAlert } = useAlertContext();
	const { id } = useParams();
	const [project, setProject] = useState({
		name: currentProject.name,
		description: currentProject.description,
	});

	useEffect(() => {
		if (alert) {
			setAlert(alert);
			clearAlerts();
		}

		// eslint-disable-next-line
	}, [alert]);

	const handleSubmit = e => {
		e.preventDefault();
		updateProject(id, project);
	};

	const handleOnChange = e => {
		setProject({ ...project, [e.target.id]: e.target.value });
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<form
			className='mt-5 mx-auto'
			style={{ maxWidth: 500 }}
			onSubmit={e => {
				handleSubmit(e);
			}}
		>
			<Alert />
			<div className='mb-3'>
				<label htmlFor='name'>Project name</label>
				<input
					type='text'
					id='name'
					className='form-control'
					value={project.name}
					onChange={e => {
						handleOnChange(e);
					}}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='description'>Project Description</label>
				<input
					type='text'
					id='description'
					className='form-control'
					value={project.description}
					onChange={e => {
						handleOnChange(e);
					}}
				/>
			</div>
			<div className='d-grid col'>
				<input
					type='submit'
					className='btn btn-primary'
					value='Submit changes'
				/>
			</div>
		</form>
	);
};

export default EditProject;
