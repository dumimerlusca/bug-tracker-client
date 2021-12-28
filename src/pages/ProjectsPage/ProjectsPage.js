import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import AllProjects from "./components/AllProjects/AllProjects";
import SingleProjectPage from "../SingleProjectPage/SingleProjectPage";
import MyProjects from "../ProjectsPage/components/MyProjects";
import AdminOnly from "../../components/routing/AdminOnly";
import CreateProjectForm from "../SingleProjectPage/components/CreateProjectForm";

const ProjectsPage = () => {
	return (
		<Fragment>
			<Routes>
				<Route
					path='/'
					element={
						<AdminOnly>
							<AllProjects />
						</AdminOnly>
					}
				/>
				<Route path='/myProjects' element={<MyProjects />} />
				<Route path=':id/*' element={<SingleProjectPage />} />
				<Route
					path='/createProject'
					element={
						<AdminOnly>
							<CreateProjectForm />
						</AdminOnly>
					}
				/>
			</Routes>
		</Fragment>
	);
};

export default ProjectsPage;
