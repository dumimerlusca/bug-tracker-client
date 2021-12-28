import React, { useEffect, useState } from "react";
import useProjectsContext from "../../../context/projects/ProjectsContext";
import Loading from "../../../components/Loading";
import useUsersContext from "../../../context/users/UsersContext";
import { useParams } from "react-router-dom";
import useAlertContext from "../../../context/alert/AlertContext";
import Alert from "../../../components/layout/Alert/Alert";
import UsersTable from "../../../components/users/UsersTable";

const ManageUsersInProject = () => {
	const { currentProject, updateProject, alert, clearAlerts } =
		useProjectsContext();
	const { users } = useUsersContext();
	const { id } = useParams();
	const { setAlert } = useAlertContext();

	const [loading, setLoading] = useState(false);
	const [newUsers, setNewUsers] = useState([...currentProject.users]);

	useEffect(() => {
		if (alert) {
			setAlert(alert);
			clearAlerts();
		}
		// eslint-disable-next-line
	}, [alert]);

	const addUserToProject = (e, _id) => {
		// Check if user is already in array
		const existentUser = newUsers.find(element => element._id === _id);
		if (existentUser) {
			setAlert({ message: "User already selected", type: "danger" });
			return;
		}

		const user = users.find(user => user._id === _id);

		const arr = [...newUsers];
		arr.push(user);
		setNewUsers(arr);
	};

	const removeUserFromProject = (e, _id) => {
		setNewUsers(newUsers.filter(user => user._id !== _id));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		await updateProject(id, { users: newUsers });
		setLoading(false);
	};

	const resetState = e => {
		e.preventDefault();
		setNewUsers([...currentProject.users]);
		setAlert({ message: "Users reset success!", type: "info" });
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<form
			onSubmit={e => {
				handleSubmit(e);
			}}
		>
			<h2 className='py-5 text-center fw-normal'>Manage users in project</h2>
			<div>
				<Alert />
				<div className='d-flex justify-content-center gap-1'>
					<input className='btn btn-primary' type='submit' value='Submit' />
					<button
						className='btn btn-danger'
						onClick={e => {
							resetState(e);
						}}
					>
						Reset
					</button>
				</div>
				<div className='flex flex-col shadow-sm gap-5'>
					<div className='flex-1'>
						<h3 className='fw-light p-2'>Users in project</h3>
						<UsersTable
							users={newUsers}
							onClickHandler={removeUserFromProject}
						/>
					</div>

					<div>
						<h3 className='fw-light p-2'>All users</h3>
						<p className='font-light'>Select new users for the project</p>
						<UsersTable users={users} onClickHandler={addUserToProject} />
					</div>
				</div>
			</div>
		</form>
	);
};

export default ManageUsersInProject;
