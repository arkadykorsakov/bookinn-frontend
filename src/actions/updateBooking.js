import { ACTION_TYPE } from './actionType';

export const updateBooking = (booking) => {
	return {
		type: ACTION_TYPE.UPDATE_BOOKING,
		payload: booking,
	};
};
