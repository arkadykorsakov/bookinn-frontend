import Button from '../button';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import Title from '../title';
import { useModal } from '../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { deleteMeBookingAsync } from '../../actions';
import { toaster } from '../../utils/toaster';

const DeleteBookingButton = ({ bookingId }) => {
	const { isOpen, handleOpen, handleClose } = useModal();
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteMeBookingAsync(bookingId)).then((res) => {
			if (res.error) {
				toaster(res.error, 'error');
			} else {
				toaster('Заявка удалена', 'success');
			}
			handleClose();
		});
	};

	return <>
		<Button
			variant="danger"
			onClick={handleOpen}
		>
			Удалить
		</Button>
		<Modal isOpen={isOpen} onClose={handleClose}>
			<Title size="md" className="mb-5">Удалить заявку?</Title>
			<div className="flex gap-5 flex-wrap mt-5">
				<Button onClick={handleDelete} variant="danger">Удалить</Button>
				<Button onClick={handleClose}>Отмена</Button>
			</div>
		</Modal>
	</>;
};

DeleteBookingButton.propTypes = {
	bookingId: PropTypes.string.isRequired,
};

export default DeleteBookingButton;
