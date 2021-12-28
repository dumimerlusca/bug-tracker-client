import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

const Header = () => {
	return (
		<nav className='navbar navbar-expand bg-primary navbar-dark'>
			<div className='container'>
				<h1 className='navbar-brand'>BugTracker</h1>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link className='nav-link' to='/login'>
							<AiOutlineLogin className='fs-4 me-1' />
							Login
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/register'>
							Register
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
