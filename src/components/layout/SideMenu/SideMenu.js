import React, { useEffect } from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaProjectDiagram, FaUsers } from "react-icons/fa";
import { IoBug } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { GiTicket } from "react-icons/gi";
import Logout from "../../auth/Logout";
import useAuthContext from "../../../context/auth/AuthContext";
import useUiContext from "../../../context/ui/UiContext";

const SideMenu = () => {
	const { user } = useAuthContext();
	const { isSideMenuVisible, hideSideMenu } = useUiContext();

	useEffect(() => {
		if (window.innerWidth < 1280) {
			hideSideMenu();
		}
		//eslint-disable-next-line
	}, []);

	return (
		<div
			className={`side_menu bg-light text-dark shadow-lg ${
				isSideMenuVisible ? "active" : ""
			}`}
		>
			<div className='px-2 py-4 text-center'>
				<IoBug className='fs-1 text-primary me-3 d-inline' />
				<h2 className='fw-light d-inline'>Welcome {user.name}!</h2>
			</div>

			<nav className='navbar navbar-collapse p-3'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link to='/dashboard' className='nav-link' onClick={hideSideMenu}>
							<MdDashboardCustomize />
							<span>Dashboard Home</span>
						</Link>
					</li>
					{(user.role === "admin" || user.role === "adminDemo") && (
						<>
							<li className='nav-item'>
								<Link
									to='/dashboard/manageRoles'
									className='nav-link'
									onClick={hideSideMenu}
								>
									<FaUsers />
									<span className=''>Manage Role Assignment</span>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/dashboard/projects'
									className='nav-link'
									onClick={hideSideMenu}
								>
									<AiOutlineProject />
									<span className=''>All Projects</span>
								</Link>
							</li>
						</>
					)}
					<li className='nav-item'>
						<Link
							to='/dashboard/projects/myProjects'
							className='nav-link'
							onClick={hideSideMenu}
						>
							<FaProjectDiagram />
							<span className=''>My Projects</span>
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/dashboard/tickets'
							className='nav-link'
							onClick={hideSideMenu}
						>
							<GiTicket />
							<span className=''>My Tickets</span>
						</Link>
					</li>
					<li>
						<Logout />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SideMenu;
