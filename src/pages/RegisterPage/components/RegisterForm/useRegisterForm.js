import { useState, useEffect } from "react";
import useAuthContext from "../../../../context/auth/AuthContext";
import useAlertContext from "../../../../context/alert/AlertContext";
import { useNavigate } from "react-router-dom";

const useRegisterForm = () => {
	const { register, alert, clearAlerts, isAuthenticated } = useAuthContext();
	const { setAlert } = useAlertContext();

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});
	const { name, email, password, password2 } = user;

	const navigate = useNavigate();

	useEffect(() => {
		if (alert) {
			if (alert.message === "Duplicated fields value entered") {
				setAlert({ message: "User already exists !", type: "danger" });
				clearAlerts();
				return;
			}
			setAlert(alert);
			clearAlerts();
		}

		// eslint-disable-next-line
	}, [alert]);

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}

		// eslint-disable-next-line
	}, [isAuthenticated]);

	const onSubmitHandler = e => {
		e.preventDefault();
		if (
			name.trim() === "" ||
			email.trim() === "" ||
			password.trim() === "" ||
			password2.trim() === ""
		) {
			setAlert({ message: "Please fill out all the fields", type: "danger" });
			return;
		}

		if (password !== password2) {
			setAlert({ message: "Passwords do not match", type: "danger" });
			return;
		}
		const newUser = {
			name,
			email,
			password,
		};
		register(newUser);
	};

	const onChangeHandler = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return { onChangeHandler, onSubmitHandler, user };
};

export default useRegisterForm;
