import { ACTION_TYPE } from './actionType';

export const setEmptyRooms = (rooms) => {
	return {
		type: ACTION_TYPE.SET_EMPTY_ROOMS,
		payload: rooms,
	};
};
