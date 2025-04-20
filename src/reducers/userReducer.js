import { ROLE } from '../constants/roles';
import { ACTION_TYPE } from '../actions';
import { USER_DATA } from '../constants/sessionStorageKeys';

const initialState = sessionStorage.getItem(USER_DATA) ?
	JSON.parse(sessionStorage.getItem(USER_DATA))
	:
	{
		id: null,
		roleId: ROLE.GUEST,
		email: null,
	};


export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};
