import React, { Fragment, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle/PageTitle";
import useUsersContext from "../../context/users/UsersContext";
import ManageRolesForm from "./components/ManageRolesForm/ManageRolesForm";

const ManageRoles = () => {
	const { getUsers, loading, users } = useUsersContext();

	useEffect(() => {
		if (!users) {
			getUsers();
		}
	}, [users, getUsers]);

	return (
		<Fragment>
			<PageTitle>Manage user roles</PageTitle>
			<div>
				<ManageRolesForm />
			</div>
		</Fragment>
	);
};

export default ManageRoles;
