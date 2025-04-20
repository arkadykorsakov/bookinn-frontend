import { ACTION_TYPE } from './actionType';

export const setBookings = (roomBookings) => {
	return {
		type: ACTION_TYPE.SET_BOOKINGS,
		payload: roomBookings,
	};
};
