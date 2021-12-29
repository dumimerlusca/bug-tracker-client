import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useTicketsContext from "../../context/tickets/TicketsContext";
import Loading from "../Loading";
import EditTicketForm from "./EditTicketForm";
import useAuthContext from "../../context/auth/AuthContext";
import useAlertContext from "../../context/alert/AlertContext";
import { useNavigate } from "react-router";
import CommentsList from "../comments/CommentsList";
import useCommentsContext from "../../context/comments/commentsContext";
import formatDate from "../../utils/formatDate";

const TicketDetails = () => {
	const [edit, setEdit] = useState(false);
	const [loading, setLoading] = useState(true);

	const {
		currentTicket,
		getTicket,
		getTickets,
		getMyTickets,
		deleteTicket,
		clearAlerts,
		alert,
	} = useTicketsContext();
	const { getComments } = useCommentsContext();
	const { user } = useAuthContext();
	const { setAlert } = useAlertContext();

	const { id } = useParams();
	const navigate = useNavigate();

	const fetchData = async () => {
		await getTicket(id);
		await getComments(id);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (alert) {
			setAlert(alert);
			clearAlerts();
		}
	}, [alert, setAlert, clearAlerts]);

	if (loading) {
		return <Loading />;
	}

	const {
		name,
		description,
		project,
		submitter,
		priority,
		status,
		developer,
		createdAt,
	} = currentTicket;

	const rolesThatCanEdit = ["admin", "project manager", "adminDemo"];
	const canEdit =
		rolesThatCanEdit.includes(user.role) ||
		submitter._id === user._id ||
		developer._id === user._id
			? true
			: false;
	const canDelete =
		rolesThatCanEdit.includes(user.role) || submitter._id === user.id
			? true
			: false;

	const handleDelete = async () => {
		if (window.confirm("Are you sure?")) {
			await deleteTicket(id);
			navigate(-1);
			getTickets();
			getMyTickets(user._id);
		}
	};

	return (
		<div>
			<button
				className='btn btn-primary'
				onClick={() => {
					setEdit(false);
				}}
			>
				Details for ticket
			</button>
			<br />
			<div className='btn-group m-3'>
				{canEdit && (
					<button
						className='btn btn-success'
						onClick={() => {
							setEdit(true);
						}}
					>
						Edit
					</button>
				)}
				{canDelete && (
					<button className='btn btn-danger' onClick={handleDelete}>
						Delete
					</button>
				)}
			</div>
			{edit ? (
				<EditTicketForm ticket={currentTicket} />
			) : (
				<div className='row'>
					<div className='col-lg-4 col-sm-6'>
						<div>
							<h2 className='text-xl font-semibold'>Title</h2>
							<p className='font-thin'>{name}</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold'>Description</h2>
							<p className='font-thin'>{description}</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold'>Assigned developer</h2>
							<p className='font-thin'>{developer ? developer.name : "-"}</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold'>Submitter</h2>
							<p className='font-thin'>{submitter.name}</p>
						</div>
					</div>
					<div className='col-lg-4 col-sm-6'>
						<div>
							<h2 className='text-xl font-semibold'>Project</h2>
							<p className='font-thin'>{project.name}</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold'>Ticket priority</h2>
							<p className='font-thin'>{priority}</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold'>Ticket status</h2>
							<p className='font-thin'>{status}</p>
						</div>
						<div>
							<h2 className='text-xl font-semibold'>Created at</h2>
							<p className='font-thin'>{formatDate(new Date(createdAt))}</p>
						</div>
					</div>
					<div className='col-lg-4'>
						<CommentsList />
					</div>
				</div>
			)}
		</div>
	);
};

export default TicketDetails;
