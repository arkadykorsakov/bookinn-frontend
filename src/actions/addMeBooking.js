import { ACTION_TYPE } from './actionType';

export const addMeBooking = (roomBooking) => {
	return {
		type: ACTION_TYPE.ADD_ME_BOOKING,
		payload: roomBooking,
	};
};
