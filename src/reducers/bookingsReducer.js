import { ACTION_TYPE } from '../actions';

const initialState = {
	entities: null,
	me: null,
};

export const bookingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_ME_BOOKINGS: {
			return {
				...state,
				me: action.payload,
			};
		}
		default:
			return state;
	}
};
