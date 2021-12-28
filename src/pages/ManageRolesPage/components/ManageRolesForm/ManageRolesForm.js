import React from "react";
import Alert from "../../../../components/layout/Alert/Alert";
import Loading from "../../../../components/Loading";
import UsersTable from "../../../../components/users/UsersTable";
import useManageRolesForm from "./useManageRolesForm";

const ManageRolesForm = () => {
	const {
		loading,
		handleSubmit,
		onClickHandler,
		usersList,
		selectedRole,
		handleOnChange,
		users,
	} = useManageRolesForm();

	if (loading) {
		return <Loading />;
	}

	return (
		<form
			className='p-3 card shadow mb-5'
			onSubmit={e => {
				handleSubmit(e);
			}}
		>
			<div className=''>
				<h4 className='fw-light p-2'>Select user</h4>
				<Alert />
				<div className='overflow-x-auto w-full shadow-2xl'>
					<UsersTable
						users={users}
						onClickHandler={onClickHandler}
						usersList={usersList}
					/>
				</div>
			</div>

			<div className='' style={{ maxWidth: 300 }}>
				<h4 className='fw-light p-2'>Select role</h4>
				<select
					name='selectedRole'
					className='form-select'
					value={selectedRole}
					onChange={e => {
						handleOnChange(e);
					}}
				>
					<option value='submitter'>Submitter</option>
					<option value='developer'>Developer</option>
					<option value='project manager'>Project manager</option>
					<option value='admin'>Admin</option>
					<option value='adminDemo'>Admin Demo</option>
					<option value='submitterDemo'>Dubmitter Demo</option>
					<option value='developerDemo'>Developer Demo</option>
				</select>
				<input type='submit' className='btn btn-primary mt-3' />
			</div>
		</form>
	);
};

export default ManageRolesForm;
