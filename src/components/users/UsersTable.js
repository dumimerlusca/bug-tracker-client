import React from "react";
import PropTypes from "prop-types";

const UsersTable = ({ users, onClickHandler, usersList }) => {
	const onClick = (e, _id) => {
		onClickHandler(e, _id);
	};

	return (
		<table className='table'>
			<thead className='bg-primary text-white'>
				<tr className=''>
					<th>Name</th>
					<th>Email</th>
					<th>Role</th>
				</tr>
			</thead>
			<tbody ref={usersList} className='' style={{ maxHeight: "300px" }}>
				{users &&
					users.map(user => {
						const { name, _id, email, role } = user;
						return (
							<tr key={_id} onClick={e => onClick(e, _id)} className=''>
								<td>{name}</td>
								<td>{email}</td>
								<td>{role}</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

UsersTable.propTypes = {
	users: PropTypes.array.isRequired,
	handleClick: PropTypes.func,
	usersList: PropTypes.object,
};

export default UsersTable;
