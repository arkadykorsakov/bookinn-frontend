import React from 'react';
import PropTypes from 'prop-types';
import { BOOKED, CANCELLED, PENDING, REJECTED, STATUSES } from '../../constants/statuses';

const statusBadges = {
	[PENDING]: {
		label: STATUSES[PENDING],
		className: 'bg-yellow-400 text-white',
	},
	[BOOKED]: {
		label: STATUSES[BOOKED],
		className: 'bg-blue-400 text-white',
	},
	[REJECTED]: {
		label: STATUSES[REJECTED],
		className: 'bg-red-500 text-white',
	},
	[CANCELLED]: {
		label: STATUSES[CANCELLED],
		className: 'bg-gray-300 text-gray-700',
	},
};

const StatusBooking = (props) => {
	return (
		<span
			className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusBadges[props.status]?.className}`}
		>
          {statusBadges[props.status]?.label}
        </span>
	);
};

StatusBooking.propTypes = {
	status: PropTypes.oneOf([0, 1, 2, 3]),
};

export default StatusBooking;
