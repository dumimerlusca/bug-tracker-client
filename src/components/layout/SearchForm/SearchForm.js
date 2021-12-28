import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchForm = ({ tableBody }) => {
	const [query, setQuery] = useState("");

	const onSubmitHandler = e => {
		e.preventDefault();
		console.log("Submit");
	};

	const handleOnChange = e => {
		setQuery(e.target.value);
	};

	const search = query => {
		if (!tableBody.current) {
			return;
		}

		const trArray = Array.from(tableBody.current.children);
		const tdArray = [];
		trArray.map(tr => {
			const content = tr.textContent;
			if (!content.includes(query)) {
				tr.style.display = "none";
			} else {
				tr.style.display = "table-row";
			}
		});
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<div className='input-group input-group-lg flex-nowrap'>
				<input
					type='text'
					className='form-control'
					onChange={handleOnChange}
					placeholder='Search...'
				/>
				<button type='submit' className='btn btn-outline-primary'>
					<BsSearch />
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
