import { ACTION_TYPE } from './actionType';

export const deleteMeBooking = (bookingId) => {
	return {
		type: ACTION_TYPE.DELETE_ME_BOOKING,
		payload: bookingId,
	};
};
