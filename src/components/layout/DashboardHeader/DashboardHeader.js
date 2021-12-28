import React from "react";
import useDashboardHeader from "./useDashboardHeader";
import { FaUserCog, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
	const { user, handleSideMenuVisibility } = useDashboardHeader();

	return (
		<nav className='navbar navbar-expand navbar-dark bg-primary'>
			<div className='container'>
				<h4 className='navbar-brand fw-normal'>
					Loggend is as: <span className=''>{user.role}</span>
				</h4>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link className='nav-link' to='/dashboard/userProfile'>
							<FaUserCog className='fs-3' />
						</Link>
					</li>
					<li className='nav-item'>
						<button
							className='btn d-block d-xl-none'
							onClick={handleSideMenuVisibility}
						>
							<FaBars className='text-light fs-3' />
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default DashboardHeader;
