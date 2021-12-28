import React from "react";
import formatDate from "../../utils/formatDate";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

const Comment = ({ comment, handleDelete, handleEdit }) => {
	const { body, createdAt, user, _id } = comment;
	return (
		<div className='card shadow p-3 mb-3'>
			<div className='row mb-2'>
				<div className='col-12'>
					<h4 className='my-0'>{user.name}</h4>
				</div>
				<div className='col-12'>
					<span className='font-thin text-sm'>
						{formatDate(new Date(createdAt))}
					</span>
				</div>
			</div>
			<p className='fw-light'>{body}</p>

			<div className='btn-group'>
				<button
					className='btn btn-primary btn-sm flex-grow-0'
					onClick={() => {
						handleEdit(comment);
					}}
				>
					<BsPencilSquare />
				</button>
				<button
					className='btn btn-sm btn-danger flex-grow-0'
					onClick={() => {
						handleDelete(_id);
					}}
				>
					<FaTrashAlt />
				</button>
			</div>
		</div>
	);
};

export default Comment;
