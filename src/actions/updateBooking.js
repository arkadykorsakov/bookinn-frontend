import { ACTION_TYPE } from './actionType';

export const updateBooking = (roomBooking) => {
	return {
		type: ACTION_TYPE.UPDATE_BOOKING,
		payload: roomBooking,
	};
};
