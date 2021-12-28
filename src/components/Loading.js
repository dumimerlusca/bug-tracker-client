import React from "react";

const Loading = () => {
	return (
		<div className='vw-100 vh-100 d-flex align-items-center justify-content-center'>
			<div
				class='spinner-border text-primary fw-normal'
				role='status'
				style={{ width: 100, height: 100 }}
			></div>
		</div>
	);
};

export default Loading;
