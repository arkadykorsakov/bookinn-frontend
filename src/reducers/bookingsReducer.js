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
		case ACTION_TYPE.ADD_ME_BOOKING: {
			return {
				...state,
				me: state.me.concat(action.payload),
			};
		}
		case ACTION_TYPE.SET_BOOKINGS: {
			return {
				...state,
				entities: action.payload,
			};
		}
		case ACTION_TYPE.UPDATE_BOOKING: {
			return {
				...state,
				entities: state.entities.map((booking) =>
					booking.id === action.payload.id ? action.payload : booking,
				),
			};
		}
		default:
			return state;
	}
};
