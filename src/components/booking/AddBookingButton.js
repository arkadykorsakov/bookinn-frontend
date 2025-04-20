import Button from '../button';
import Modal from '../modal';
import React from 'react';
import BookingForm from './BookingForm';
import Title from '../title';
import PropTypes from 'prop-types';
import { useModal } from '../../hooks/useModal';

const AddBookingButton = ({ roomId, imageUrl }) => {
	const { isOpen, handleOpen, handleClose } = useModal();
	return <>
		<Button onClick={handleOpen}>
			Забронировать
		</Button>
		<Modal isOpen={isOpen} onClose={handleClose}>
			<Title size="md" className="mb-5">Забронировать номер</Title>
			<img src={imageUrl} alt="Номер" className="my-5 size-[200px] object-cover" />
			<BookingForm roomId={roomId} onEndSubmit={handleClose} />
		</Modal>
	</>;
};

AddBookingButton.propTypes = {
	roomId: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
};

export default AddBookingButton;
