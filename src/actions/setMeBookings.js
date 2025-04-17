import { ACTION_TYPE } from './actionType';

export const setMeBookings = (bookings) => {
	return {
		type: ACTION_TYPE.SET_ME_BOOKINGS,
		payload: bookings,
	};
};
