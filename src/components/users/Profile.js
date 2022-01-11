import React, { useState, useEffect, Fragment } from "react";
import useAuthContext from "../../context/auth/AuthContext";
import useUsersContext from "../../context/users/UsersContext";
import { AiFillCloseCircle } from "react-icons/ai";
import useAlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert/Alert";
import PageTitle from "../layout/PageTitle/PageTitle";

const Profile = () => {
	const { user, loadUser } = useAuthContext();
	const { updateUser, alert, clearAlerts } = useUsersContext();
	const { setAlert } = useAlertContext();

	const [edit, setEdit] = useState(false);
	const [newProfile, setNewProfile] = useState({ ...user });
	const { email, name, role } = newProfile;

	useEffect(() => {
		if (alert) {
			setAlert(alert);
			clearAlerts();
		}
	}, [alert, setAlert, clearAlerts]);

	const handleOnChange = e => {
		setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
	};

	const handleUpdate = async () => {
		await updateUser(user._id, newProfile);
		loadUser();
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (name.trim() === "" || email.trim() === "") {
			setAlert({ message: "Please enter name and email", type: "danger" });
			return;
		}

		if (name === user.name && email === user.email) {
			setAlert({ message: "No changes made!", type: "info" });
			return;
		}
		handleUpdate();
	};

	return (
		<Fragment>
			<PageTitle>Profile</PageTitle>
			<form
				className='shadow border p-4 mx-auto'
				style={{ maxWidth: 500 }}
				onSubmit={e => {
					handleSubmit(e);
				}}
			>
				<Alert />
				<div className='mb-3'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						className='form-control'
						readOnly={!edit}
						id='name'
						name='name'
						onChange={e => {
							handleOnChange(e);
						}}
						value={name}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						className='form-control'
						readOnly={!edit}
						id='email'
						name='email'
						onChange={e => {
							handleOnChange(e);
						}}
						value={email}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='role'>Role</label>
					<input type='text' className='form-control' readOnly value={role} />
				</div>
				{edit ? (
					<div className='btn group'>
						<button className='btn btn-warning' type='submit'>
							Update
						</button>
						<button
							className='btn'
							onClick={() => {
								setEdit(false);
								setNewProfile({ ...user });
							}}
						>
							<AiFillCloseCircle className='fs-4' />
						</button>
					</div>
				) : (
					<button
						className='btn btn-primary'
						onClick={() => {
							setEdit(true);
						}}
					>
						Edit
					</button>
				)}
			</form>
		</Fragment>
	);
};

export default Profile;
