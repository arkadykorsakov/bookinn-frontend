import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { ReactComponent as TrashIcon } from '../../assets/icons/TrashIcon.svg';
import { ReactComponent as PencilIcon } from '../../assets/icons/PencilIcon.svg';
import formatDate from '../../utils/formatDate';


const statusBadges = {
	0: {
		label: 'В ожидании',
		className: 'bg-yellow-400 text-white',
	},
	1: {
		label: 'Забронировано',
		className: 'bg-blue-400 text-white',
	},
	2: {
		label: 'Отклонено',
		className: 'bg-red-500 text-white',
	},
	3: {
		label: 'Отменено',
		className: 'bg-gray-300 text-gray-700',
	},
};

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
        <span
			className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusBadges[booking.status]?.className}`}
		>
          {statusBadges[booking.status]?.label}
        </span>

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
						<PencilIcon className="size-4" />
						Редактировать
					</Button>

					<Button
						variant="danger"
						onClick={onDelete}
					>
						<TrashIcon className="size-4" />
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
