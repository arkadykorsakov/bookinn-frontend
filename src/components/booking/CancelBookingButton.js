import Button from '../button';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import Title from '../title';
import { useModal } from '../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { deleteMeBookingAsync } from '../../actions/deleteMeBookingAsync';
import { toaster } from '../../utils/toaster';
import { cancelMeBookingAsync } from '../../actions/cancelMeBookingAsync';

const CancelBookingButton = ({ bookingId }) => {
	const { isOpen, handleOpen, handleClose } = useModal();
	const dispatch = useDispatch();

	const handleCancelBooking = () => {
		dispatch(cancelMeBookingAsync(bookingId)).then((res) => {
			if (res.error) {
				toaster(res.error, 'error');
			} else {
				toaster('Бронь отменена', 'success');
			}
			handleClose();
		});
	};

	return <>
		<Button
			variant="danger"
			onClick={handleOpen}
		>
			Отменить бронь
		</Button>
		<Modal isOpen={isOpen} onClose={handleClose}>
			<Title size="md" className="mb-5">Отменить бронь?</Title>
			<div className="flex gap-5 flex-wrap mt-5">
				<Button onClick={handleCancelBooking} variant="danger">Да</Button>
				<Button onClick={handleClose}>Нет</Button>
			</div>
		</Modal>
	</>;
};

CancelBookingButton.propTypes = {
	bookingId: PropTypes.string.isRequired,
};

export default CancelBookingButton;
