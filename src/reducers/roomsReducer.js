import { ACTION_TYPE } from '../actions';

const initialState = { entities: null, empty: null};

export const roomsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_EMPTY_ROOMS: {
			return {
				...state,
				empty: [...action.payload],
			};
		}
		default:
			return state;
	}
};
