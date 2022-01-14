import React from "react";
import Alert from "../../../../components/layout/Alert/Alert";
import useLoginForm from "./useLoginForm";

const Login = () => {
	const {
		email,
		password,
		onSubmitHandler,
		loginAsDemoAdmin,
		onChangeHandler,
		loading,
	} = useLoginForm();

	return (
		<form
			onSubmit={onSubmitHandler}
			className='card p-5 shadow mx-auto'
			style={{ maxWidth: "500px", marginTop: "8rem" }}
		>
			<h2 className='text-center display-3 mb-5'>Login</h2>

			<Alert />

			<div className='form-floating mb-3'>
				<input
					className='form-control'
					onChange={onChangeHandler}
					name='email'
					value={email}
					id='email'
					type='email'
					placeholder='Email'
				/>
				<label htmlFor='email' className='form_label'>
					Email
				</label>
			</div>
			<div className='form-floating mb-3'>
				<input
					onChange={onChangeHandler}
					name='password'
					value={password}
					className='form-control'
					type='password'
					id='password'
					placeholder='Password'
				/>
				<label htmlFor='password' className='form_label'>
					Password
				</label>
			</div>
			<div className='d-flex align-items-center mb-3'>
				<p className='text-muted m-0'>Login as demo</p>
				<button
					className='btn btn-link'
					onClick={loginAsDemoAdmin}
					type='button'
				>
					admin
				</button>
			</div>
			<div className='d-grid col'>
				<button type='submit' className='btn btn-primary'>
					{loading ? <div className='spinner-border'></div> : "Submit"}
				</button>
			</div>
		</form>
	);
};

export default Login;
