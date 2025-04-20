import { ACTION_TYPE } from './actionType';
import { USER_DATA } from '../constants/sessionStorageKeys';

export const setUser = (user) => {
	sessionStorage.setItem(USER_DATA, JSON.stringify(user));
	return {
		type: ACTION_TYPE.SET_USER,
		payload: user,
	};
};
