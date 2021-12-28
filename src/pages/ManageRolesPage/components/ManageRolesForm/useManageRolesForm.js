import { useState, useRef, useEffect } from "react";
import useUsersContext from "../../../../context/users/UsersContext";
import useAlertContext from "../../../../context/alert/AlertContext";

const useManageRolesForm = () => {
	const [selectedUser, setSelectedUser] = useState("");
	const [selectedRole, setSelectedRole] = useState("submitter");

	const { users, loading, updateUser, getUsers, alert, clearAlerts } =
		useUsersContext();
	const { setAlert } = useAlertContext();

	const usersList = useRef(null);

	useEffect(() => {
		if (alert) {
			setAlert(alert);
			clearAlerts();
		}
		// eslint-disable-next-line
	}, [alert]);

	const handleOnChange = e => {
		if (e.target.name === "selectedUser") {
			setSelectedUser(e.target.value);
			return;
		}
		if (e.target.name === "selectedRole") {
			setSelectedRole(e.target.value);
			return;
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (selectedUser === "" || selectedRole === "") {
			setAlert({ message: "Please select user and role", type: "danger" });
			return;
		}
		await updateUser(selectedUser, { role: selectedRole });
		getUsers();
		setSelectedRole("");
		setSelectedUser("submitter");
	};

	const onClickHandler = (e, id) => {
		const list = usersList.current.querySelectorAll("tr");
		list.forEach(item => {
			item.classList.remove("table-active");
		});
		e.target.parentElement.classList.add("table-active");
		setSelectedUser(id);
	};
	return {
		loading,
		handleSubmit,
		onClickHandler,
		usersList,
		selectedRole,
		handleOnChange,
		users,
	};
};

export default useManageRolesForm;
