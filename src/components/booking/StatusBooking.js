import React from 'react';
import PropTypes from 'prop-types';

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
