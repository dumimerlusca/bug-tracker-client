import React, { useEffect, useState, Fragment } from "react";
import useProjectsContext from "../../context/projects/ProjectsContext";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./subpages/ProjectDetails";
import ManageUsersInProject from "./subpages/ManageUsersInProject";
import EditProject from "./components/EditProject";
import AdminAndProjectManagerOnly from "../../components/routing/AdminAndProjectManagerOnly";
import ProjectInfo from "./components/ProjectInfo";
import ProjectActions from "./components/ProjectActions/ProjectActions";
import AddTicketModal from "./components/AddTicketModal";

const SingleProjectPage = () => {
	const [loading, setLoading] = useState(true);
	const { getProject, currentProject } = useProjectsContext();
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			await getProject(id);
			setLoading(false);
		};

		fetchData();
		//eslint-disable-next-line
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<Fragment>
			<ProjectInfo project={currentProject} />
			<ProjectActions currentProject={currentProject} />
			<AddTicketModal />

			<Routes>
				<Route path='/' element={<ProjectDetails />} />
				<Route
					path='/manageUsers'
					element={
						<AdminAndProjectManagerOnly>
							<ManageUsersInProject />
						</AdminAndProjectManagerOnly>
					}
				/>
				<Route
					path='/edit'
					element={
						<AdminAndProjectManagerOnly>
							<EditProject />
						</AdminAndProjectManagerOnly>
					}
				/>
			</Routes>
		</Fragment>
	);
};

export default SingleProjectPage;
