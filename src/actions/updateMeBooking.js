import { ACTION_TYPE } from './actionType';

export const updateMeBooking = (booking) => {
	return {
		type: ACTION_TYPE.UPDATE_ME_BOOKING,
		payload: booking,
	};
};
