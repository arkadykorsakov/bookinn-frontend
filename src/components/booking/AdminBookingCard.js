import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import StatusBooking from './StatusBooking';
import React from 'react';
import ChangeStatusButton from './ChangeStatusButton';

const AdminBookingCard = ({ booking }) => {
	return <div
		key={booking.id}
		className="bg-gray-100 border border-[#d5dce8] rounded-md p-4 flex flex-col md:flex-row gap-6 items-center justify-between">
		<div className="flex flex-col items-center gap-6 md:flex-row">
			<div>
				<div>
					Начало: {formatDate(booking.startDate)}
				</div>
				<div>
					Окончание: {formatDate(booking.endDate)}
				</div>
				<div>Email: {booking.user.email}</div>
			</div>
			<StatusBooking status={booking.status} />
		</div>
		<ChangeStatusButton bookingId={booking.id} defaultStatus={booking.status} />
	</div>
}

AdminBookingCard.propTypes = {
	booking: PropTypes.shape({
		user: PropTypes.shape({
			email: PropTypes.string.isRequired,
		}),
		status: PropTypes.number.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
	}).isRequired,
};


export default AdminBookingCard;
