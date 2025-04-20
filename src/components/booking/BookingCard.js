import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import StatusBooking from './StatusBooking';
import { BOOKED, PENDING } from '../../constants/statuses';
import EditBookingButton from './EditBookingButton';
import toInputDateTimeLocal from '../../utils/toInputDateTimeLocal';
import DeleteBookingButton from './DeleteBookingButton';
import CancelBookingButton from './CancelBookingButton';

const BookingCard = ({ booking }) => {
	return (
		<div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
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
				{booking.status === PENDING &&
					<div className="flex justify-end gap-2 pt-2">
						<EditBookingButton
							roomId={booking.room.id}
							imageUrl={booking.room.imageUrl}
							data={{
								startDate: toInputDateTimeLocal(booking.startDate),
								endDate: toInputDateTimeLocal(booking.endDate),
								bookingId: booking.id,
							}}
						/>
						<DeleteBookingButton bookingId={booking.id} />
					</div>
				}
				{booking.status === BOOKED &&
					<CancelBookingButton
						bookingId={booking.id}
					/>
				}
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
