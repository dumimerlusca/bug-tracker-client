import React, { Fragment } from "react";
import Header from "../../components/layout/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";

const LoginPage = () => {
	return (
		<Fragment>
			<Header />
			<div className='container'>
				<LoginForm />
			</div>
		</Fragment>
	);
};

export default LoginPage;
