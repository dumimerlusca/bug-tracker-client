import React from "react";
import ReactDOM from "react-dom";
import AddTicketForm from "../../../components/tickets/AddTicketForm/AddTicketForm";

const AddTicketModal = () => {
	return ReactDOM.createPortal(
		<div className='modal' id='addTicketFormModal'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<button className='btn-close' data-bs-dismiss='modal'></button>
					</div>
					<div className='modal-body'>
						<AddTicketForm />
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default AddTicketModal;
