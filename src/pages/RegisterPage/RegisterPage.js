import React, { Fragment } from "react";
import Header from "../../components/layout/Header/Header";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const RegisterPage = () => {
	return (
		<Fragment>
			<Header />
			<div className='container'>
				<RegisterForm />
			</div>
		</Fragment>
	);
};

export default RegisterPage;
