import { ACTION_TYPE } from './actionType';

export const setRooms = (rooms) => {
	return {
		type: ACTION_TYPE.SET_ROOMS,
		payload: rooms,
	};
};
