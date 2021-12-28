import React, { useEffect, useState, Fragment } from "react";
import useUsersContext from "../../../context/users/UsersContext";
import useProjectsContext from "../../../context/projects/ProjectsContext";
import Loading from "../../../components/Loading";
import useAlertContext from "../../../context/alert/AlertContext";
import useAuthContext from "../../../context/auth/AuthContext";
import Alert from "../../../components/layout/Alert/Alert";
import PageTitle from "../../../components/layout/PageTitle/PageTitle";
import UsersTable from "../../../components/users/UsersTable";

const CreateProjectForm = () => {
	const { users } = useUsersContext();
	const { user } = useAuthContext();
	const {
		createProject,
		getProjects,
		getMyProjects,
		loading,
		alert,
		clearAlerts,
	} = useProjectsContext();
	const { setAlert } = useAlertContext();

	const [project, setProject] = useState({
		name: "",
		description: "",
		users: [],
	});

	useEffect(() => {
		if (alert) {
			setAlert(alert);
			clearAlerts();
		}

		// eslint-disable-next-line
	}, [alert]);

	const handleOnChange = e => {
		setProject({ ...project, [e.target.id]: e.target.value });
	};

	const addUserToProject = (e, _id) => {
		const existentUser = project.users.find(item => item._id === _id);
		if (existentUser) {
			setAlert({ message: "User already exists!", type: "danger" });
			return;
		}
		const user = users.find(user => user._id === _id);
		const newArr = [...project.users];
		newArr.push(user);
		setProject({ ...project, users: newArr });
	};

	const removeUserFromProject = (e, _id) => {
		setProject({
			...project,
			users: project.users.filter(user => user._id !== _id),
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (!project.name.trim() || !project.description.trim()) {
			setAlert({
				message: "Please enter name and description",
				type: "danger",
			});
			return;
		}
		await createProject({
			...project,
			users: project.users.map(user => user._id),
		});
		getProjects();
		getMyProjects(user._id);
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<Fragment>
			<PageTitle>Create new project</PageTitle>
			<Alert />
			<form
				className='border shadow p-4'
				onSubmit={e => {
					handleSubmit(e);
				}}
			>
				<div className='mb-3'>
					<label htmlFor='name'>Name</label>
					<input
						className='form-control'
						id='name'
						type='text'
						value={project.name}
						onChange={e => {
							handleOnChange(e);
						}}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='description'>Description</label>
					<input
						className='form-control'
						id='description'
						type='text'
						value={project.description}
						onChange={e => {
							handleOnChange(e);
						}}
					/>
				</div>
				<div>
					<h2 className='text-center fw-normal'>Asign users</h2>
					<div className='row'>
						<div className='col-lg-6'>
							<h3 className='fw-light'>All users</h3>
							<UsersTable users={users} onClickHandler={addUserToProject} />
						</div>

						<div className='col-lg-6'>
							<h3 className='fw-light'>Users in project</h3>
							<UsersTable
								users={project.users}
								onClickHandler={removeUserFromProject}
							/>
						</div>
					</div>
				</div>

				<input className='btn btn-warning' type='submit' value='Submit' />
			</form>
		</Fragment>
	);
};

export default CreateProjectForm;
