import Button from '../button';
import Modal from '../modal';
import React from 'react';
import BookingForm from './BookingForm';
import Title from '../title';
import PropTypes from 'prop-types';
import { useModal } from '../../hooks/useModal';

const EditBookingButton = ({ roomId, imageUrl, data }) => {
	const { isOpen, handleOpen, handleClose } = useModal();
	return <>
		<Button onClick={handleOpen}>
			Обновить
		</Button>
		<Modal isOpen={isOpen} onClose={handleClose}>
			<Title size="md" className="mb-5">Обновить бронь</Title>
			<img src={imageUrl} alt="Номер" className="my-5 size-[200px] object-cover" />
			<BookingForm roomId={roomId} onEndSubmit={handleClose} isEdit defaultValues={data} />
		</Modal>
	</>;
};

EditBookingButton.propTypes = {
	roomId: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	data: PropTypes.shape({
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		bookingId: PropTypes.string.isRequired,
	}).isRequired,
};

export default EditBookingButton;
