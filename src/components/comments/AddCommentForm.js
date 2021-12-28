import React, { useState, useEffect } from "react";
import useCommentsContext from "../../context/comments/commentsContext";
import { useParams } from "react-router";
import useAlertContext from "../../context/alert/AlertContext";

const AddCommentForm = ({
	setIsFormVisible,
	setEdit,
	edit,
	currentComment,
}) => {
	const { addComment, getComments, updateComment } = useCommentsContext();
	const [comment, setComment] = useState(currentComment?.body);

	const { setAlert } = useAlertContext();

	const { id: ticketId } = useParams();

	useEffect(() => {
		if (edit) {
			setComment(currentComment?.body);
		}
	}, [edit, currentComment]);

	const handleOnChange = e => {
		setComment(e.target.value);
	};

	const handleAddComment = async () => {
		await addComment(ticketId, { body: comment });
		getComments(ticketId);
	};

	const handleUpdateComment = async () => {
		await updateComment(currentComment._id, { body: comment });
		getComments(ticketId);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (comment.trim() === "") {
			return setAlert({ message: "Please add comment", type: "danger" });
		}

		if (edit) {
			handleUpdateComment();
			setIsFormVisible(false);
			setEdit(false);
		} else {
			handleAddComment();
			setIsFormVisible(false);
		}
	};

	return (
		<form
			className='my-2'
			onSubmit={e => {
				handleSubmit(e);
			}}
		>
			<div className='mb-3'>
				<label htmlFor='body'>Comment</label>
				<textarea
					className='form-control'
					name='body'
					id='body'
					value={comment}
					placeholder='Write your comment here...'
					onChange={e => {
						handleOnChange(e);
					}}
					rows='5'
				></textarea>
			</div>
			{edit ? (
				<button className='btn btn-success' type='submit'>
					Update
				</button>
			) : (
				<button className='btn btn-warning' type='submit'>
					Send
				</button>
			)}
		</form>
	);
};

export default AddCommentForm;
