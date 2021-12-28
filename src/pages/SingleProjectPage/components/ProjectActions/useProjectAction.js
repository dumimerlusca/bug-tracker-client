import useProjectsContext from "../../../../context/projects/ProjectsContext";
import useAuthContext from "../../../../context/auth/AuthContext";
import useTicketsContext from "../../../../context/tickets/TicketsContext";
import { useNavigate } from "react-router";

const useProjectAction = currentProject => {
	const { getProjects, deleteProject } = useProjectsContext();
	const { getTickets } = useTicketsContext();
	const { user } = useAuthContext();

	const navigate = useNavigate();

	const handleDeleteProject = async () => {
		if (window.confirm("Are you sure?")) {
			await deleteProject(currentProject.id);
			getProjects();
			getTickets();
			navigate("/dashboard/projects");
		}
	};

	const handleEditProject = () => {
		navigate(`/dashboard/projects/${currentProject._id}/edit`);
	};

	return {
		handleDeleteProject,
		handleEditProject,
		user,
	};
};

export default useProjectAction;
