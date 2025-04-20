import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import formatDate from '../../utils/formatDate';
import StatusBooking from './StatusBooking';


const BookingCard = ({ booking }) => {
	const onDelete = () => {
		console.log('DELETE');
	};

	const onEdit = () => {
		console.log('EDIT');
	};

	return (
		<div className="max-w-md w-full rounded-2xl overflow-hidden shadow-lg bg-white">
			<img src={booking.room.imageUrl} alt="Фото" className="w-full h-48 object-cover" />

			<div className="p-4 space-y-3">
				<StatusBooking status={booking.status} />
				<div className="text-sm text-gray-700 space-y-1">
					<p>
						<span className="font-medium">Дата прибытия:</span> {formatDate(booking.startDate)}
					</p>
					<p>
						<span className="font-medium">Дата убытия:</span> {formatDate(booking.endDate)}
					</p>
				</div>
				<div className="flex justify-end gap-2 pt-2">
					<Button
						variant="primary"
						onClick={onEdit}
					>
						Редактировать
					</Button>
					<Button
						variant="danger"
						onClick={onDelete}
					>
						Удалить
					</Button>
				</div>
			</div>
		</div>
	);
};

BookingCard.propTypes = {
	booking: PropTypes.shape({
		room: {
			imageUrl: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
		},
		status: PropTypes.number.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
	}).isRequired,
};


export default BookingCard;
