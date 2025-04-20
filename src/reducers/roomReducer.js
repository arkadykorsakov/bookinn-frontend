import { ACTION_TYPE } from '../actions';

const initialState = {
	id: null,
	imageUrl: null,
};

export const roomReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_ROOM: {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};
