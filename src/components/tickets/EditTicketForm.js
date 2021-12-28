import React, { useState, useEffect } from "react";
import useAlertContext from "../../context/alert/AlertContext";
import useTicketsContext from "../../context/tickets/TicketsContext";
import Alert from "../layout/Alert/Alert";
import useProjectsContext from "../../context/projects/ProjectsContext";
import useAuthContext from "../../context/auth/AuthContext";

const EditTicketForm = ({ ticket }) => {
	const [newTicket, setNewTicket] = useState({ ...ticket });
	const { setAlert } = useAlertContext();
	const { updateTicket, alert, getTickets, getTicket, getMyTickets } =
		useTicketsContext();
	const { getProject, currentProject } = useProjectsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		getProject(ticket.project._id);

		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (alert) {
			setAlert(alert);
		}
		// eslint-disable-next-line
	}, [alert]);

	const handleOnChange = e => {
		setNewTicket({ ...newTicket, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		await updateTicket(ticket._id, newTicket);
		getTickets();
		getTicket(ticket._id);
		getMyTickets(user._id);
	};

	const { name, description, priority, status, developer } = newTicket;

	const canEditEverything = ["admin", "project manager"].includes(user.role)
		? true
		: false;
	const canEditStatus = ["admin", "project manager", "developer"].includes(
		user.role
	)
		? true
		: false;
	const isTicketSubmitter = ticket.submitter._id === user._id ? true : false;

	return (
		<form
			className='card shadow p-4 mx-auto'
			style={{ maxWidth: 500 }}
			onSubmit={e => {
				handleSubmit(e);
			}}
		>
			<h2 className='fw-light text-center'>Edit ticket</h2>
			<Alert />
			{(canEditEverything || isTicketSubmitter) && (
				<div className='mb-3'>
					<label htmlFor='name'>Title</label>
					<input
						type='text'
						className='form-control'
						value={name}
						name='name'
						id='name'
						onChange={e => {
							handleOnChange(e);
						}}
					/>
				</div>
			)}
			{(canEditEverything || isTicketSubmitter) && (
				<div className='mb-3'>
					<label htmlFor='description'>Description</label>
					<textarea
						rows='5'
						type='text'
						className='form-control'
						value={description}
						name='description'
						id='description'
						onChange={e => {
							handleOnChange(e);
						}}
					></textarea>
				</div>
			)}
			{canEditEverything && (
				<div className='mb-3'>
					<label htmlFor='developer'>Developer</label>
					<select
						className='form-select'
						name='developer'
						id='developer'
						onChange={e => {
							handleOnChange(e);
						}}
						value={developer}
					>
						{currentProject &&
							currentProject.users.map(user => {
								const { name, role, _id } = user;
								return (
									<option key={_id} value={_id}>
										{`${name}  ${role}`}
									</option>
								);
							})}
					</select>
				</div>
			)}
			{canEditEverything && (
				<div className='mb-3'>
					<label htmlFor='priority'>Priority</label>
					<select
						name='priority'
						className='form-select'
						id='priority'
						onChange={e => {
							handleOnChange(e);
						}}
						value={priority}
					>
						<option value='urgent'>Urgent</option>
						<option value='high'>High</option>
						<option value='medium'>Medium</option>
						<option value='low'>low</option>
					</select>
				</div>
			)}
			{canEditStatus && (
				<div className='mb-3'>
					<label htmlFor='status'>Status</label>
					<select
						name='status'
						id='status'
						className='form-select'
						onChange={e => {
							handleOnChange(e);
						}}
						value={status}
					>
						<option value='submitted'>Submitted</option>
						<option value='in progress'>In progress</option>
						<option value='in review'>In review</option>
						<option value='done'>done</option>
					</select>
				</div>
			)}
			<div className='d-grid col'>
				<input type='submit' value='Submit' className='btn btn-primary' />
			</div>
		</form>
	);
};

export default EditTicketForm;
