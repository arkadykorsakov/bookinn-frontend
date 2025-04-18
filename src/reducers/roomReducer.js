import { ACTION_TYPE } from '../actions';

const initialState = {
	id: null,
	imageUrl: null,
	bookings: null,
};

export const roomReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_ROOM: {
			return {
				...state,
				...action.payload,
			};
		}
		case ACTION_TYPE.SET_ROOM_BOOKINGS_FOR_ROOM: {
			return {
				...state,
				bookings: action.payload,
			};
		}
		default:
			return state;
	}
};
