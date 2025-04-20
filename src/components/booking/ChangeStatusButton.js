import Button from '../button';
import React from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../modal';
import Title from '../title';
import StatusForm from './StatusForm';
import PropTypes from 'prop-types';

const ChangeStatusButton = (props) => {
	const { isOpen, handleOpen, handleClose } = useModal();
	return <>
		<Button onClick={handleOpen}>Изменить статус</Button>
		<Modal isOpen={isOpen} onClose={handleClose}>
			<Title size="md" className="mb-5">Обновить статус</Title>
			<StatusForm bookingId={props.bookingId} defaultStatus={props.defaultStatus} onEndSubmit={handleClose} />
		</Modal>
	</>;
};

ChangeStatusButton.propTypes = {
	bookingId: PropTypes.string.isRequired,
	defaultStatus: PropTypes.number.isRequired,
};

export default ChangeStatusButton;
