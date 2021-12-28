import React from "react";
import Alert from "../../layout/Alert/Alert";
import useAddTicketForm from "./useAddTicketForm";

const AddTicketForm = () => {
	const { handleOnChange, handleSubmit, name, description, priority } =
		useAddTicketForm();

	return (
		<form
			className=''
			style={{ maxWidth: 500 }}
			onSubmit={e => {
				handleSubmit(e);
			}}
		>
			<h1 className='text-xl p-4'>Create new ticket</h1>
			<Alert />
			<div className='mb-3'>
				<label htmlFor='name'>Title</label>
				<input
					type='text'
					className='form-control'
					id='name'
					value={name}
					onChange={e => {
						handleOnChange(e);
					}}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					className='form-control'
					value={description}
					onChange={e => {
						handleOnChange(e);
					}}
					rows='5'
				></textarea>
			</div>
			<div className='mb-3'>
				<label htmlFor='priority'>Priority</label>
				<select
					className='form-select'
					id='priority'
					onChange={e => {
						handleOnChange(e);
					}}
					value={priority}
				>
					<option value='high'>High</option>
					<option value='medium'>Medium</option>
					<option value='low'>low</option>
				</select>
			</div>
			<input type='submit' className='btn btn-primary' value='Submit' />
		</form>
	);
};

export default AddTicketForm;
