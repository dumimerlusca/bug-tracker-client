import { useState, useEffect } from "react";
import useTicketsContext from "../../../context/tickets/TicketsContext";
import { useParams } from "react-router";
import useAlertContext from "../../../context/alert/AlertContext";
import useProjectsContext from "../../../context/projects/ProjectsContext";
import useAuthContext from "../../../context/auth/AuthContext";

const useAddTicketForm = () => {
	const { addTicket, alert, getTickets, getMyTickets } = useTicketsContext();
	const { getProject } = useProjectsContext();
	const { user } = useAuthContext();
	const { setAlert } = useAlertContext();
	const { id: projectId } = useParams();

	const [ticket, setTicket] = useState({
		name: "",
		description: "",
		priority: "high",
	});
	const { name, description, priority } = ticket;

	useEffect(() => {
		if (alert) {
			setAlert(alert);
		}

		// eslint-disable-next-line
	}, [alert]);

	const handleSubmit = async e => {
		e.preventDefault();
		if (name.trim() === "" || description.trim() === "") {
			setAlert({ message: "Please fill all the field", type: "danger" });
			return;
		}
		await addTicket(projectId, ticket);
		getProject(projectId);
		getTickets();
		getMyTickets(user._id);
	};

	const handleOnChange = e => {
		setTicket({ ...ticket, [e.target.id]: e.target.value });
	};

	return { handleOnChange, handleSubmit, name, description, priority };
};

export default useAddTicketForm;
