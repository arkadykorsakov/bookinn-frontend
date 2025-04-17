import Button from '../button';
import Modal from '../modal';
import React from 'react';
import BookingForm from './BookingForm';
import Title from '../title';
import PropTypes from 'prop-types';

const AddBookingButton = ({ roomId, imageUrl }) => {
	const [isModalOpen, setModalOpen] = React.useState(false);
	return <>
		<Button onClick={() => setModalOpen(true)}>
			Забронировать
		</Button>
		<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
			<Title size="md" className="mb-5">Забронировать номер</Title>
			<img src={imageUrl} alt="Номер" className="my-5 size-[200px] object-cover" />
			<BookingForm roomId={roomId} onEndSubmit={() => setModalOpen(false)} />
		</Modal>
	</>;
};

AddBookingButton.propTypes = {
	roomId: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
};

export default AddBookingButton;
