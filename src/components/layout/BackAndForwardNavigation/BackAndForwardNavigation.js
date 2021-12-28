import React from "react";
import { useNavigate } from "react-router";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

const BackAndForwardNavigation = () => {
	const navigate = useNavigate();

	return (
		<div className='flex gap-2 m-2'>
			<button
				className='btn'
				onClick={() => {
					navigate(-1);
				}}
			>
				<BsFillArrowLeftCircleFill className='fs-3 text-secondary' />
			</button>
			<button
				className='btn '
				onClick={() => {
					navigate(1);
				}}
			>
				<BsFillArrowRightCircleFill className='fs-3 text-secondary' />
			</button>
		</div>
	);
};

export default BackAndForwardNavigation;
