import { useState, useEffect } from "react";
import useAlertContext from "../../../../context/alert/AlertContext";
import useAuthContext from "../../../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAlert } = useAlertContext();
	const { login, isAuthenticated, alert, clearAlerts, loading } =
		useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/dashboard");
		}
	}, [isAuthenticated, navigate]);

	useEffect(() => {
		if (alert) {
			setAlert(alert);
			clearAlerts();
		}
	}, [alert, setAlert, clearAlerts]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case "email": {
				setEmail(e.target.value);
				break;
			}
			case "password": {
				setPassword(e.target.value);
				break;
			}
			default:
				return;
		}
	};

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submit");
		if (email.trim() === "" || password.trim() === "") {
			setAlert({ message: "Please enter email and password", type: "danger" });
			return;
		}
		const user = { email, password };
		login(user);
	};

	const loginAsDemoAdmin = () => {
		const user = {
			email: "adminDemo@gmail.com",
			password: "123456",
		};
		login(user);
	};

	return {
		email,
		password,
		onSubmitHandler,
		loginAsDemoAdmin,
		onChangeHandler,
		loading,
	};
};

export default useLoginForm;
