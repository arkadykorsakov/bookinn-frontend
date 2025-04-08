import { ACTION_TYPE } from './actionType';

export const setRoom = (room) => {
	return {
		type: ACTION_TYPE.SET_ROOM,
		payload: room,
	};
};
