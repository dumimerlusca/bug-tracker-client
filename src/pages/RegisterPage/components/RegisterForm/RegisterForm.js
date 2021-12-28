import React from "react";
import useRegisterForm from "./useRegisterForm";
import Alert from "../../../../components/layout/Alert/Alert";

const RegisterForm = () => {
	const { onChangeHandler, onSubmitHandler, user } = useRegisterForm();

	return (
		<form
			onSubmit={onSubmitHandler}
			className='card p-5 shadow mx-auto'
			style={{ maxWidth: "500px", marginTop: "8rem" }}
		>
			<h1 className='text-center display-3 mb-5'>Register</h1>
			<Alert />
			<div className='form-floating mb-3'>
				<input
					className='form-control'
					onChange={onChangeHandler}
					value={user.name}
					name='name'
					id='name'
					type='text'
					placeholder='Name'
				/>
				<label htmlFor='name'>Name</label>
			</div>
			<div className='form-floating mb-3'>
				<input
					onChange={onChangeHandler}
					value={user.email}
					className='form-control'
					name='email'
					id='email'
					type='text'
					placeholder='Email'
				/>
				<label htmlFor='email'>Email</label>
			</div>
			<div className='form-floating mb-3'>
				<input
					onChange={onChangeHandler}
					value={user.password}
					className='form-control'
					name='password'
					id='password'
					type='password'
					placeholder='password'
					minLength='6'
				/>
				<label htmlFor='password' className='form_label'>
					Password
				</label>
			</div>
			<div className='form-floating mb-3'>
				<input
					onChange={onChangeHandler}
					value={user.password2}
					className='form-control'
					name='password2'
					id='password2'
					type='password'
					placeholder='Confirm password'
					minLength='6'
				/>
				<label htmlFor='password2'>Confirm password</label>
			</div>
			<div className='d-grid col'>
				<input type='submit' className='btn btn-primary' />
			</div>
		</form>
	);
};

export default RegisterForm;
