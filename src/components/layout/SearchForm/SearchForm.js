import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
	const onSubmitHandler = e => {
		e.preventDefault();
		console.log("Submit");
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<div className='input-group input-group-lg flex-nowrap'>
				<input type='text' className='form-control' placeholder='Search...' />
				<button type='submit' className='btn btn-outline-primary'>
					<BsSearch />
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
