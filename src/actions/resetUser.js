import { ACTION_TYPE } from './actionType';
import { ROLE } from '../constants/roles';
import { USER_DATA } from '../components/sessionStorageKeys';

export const resetUser = () => {
	sessionStorage.removeItem(USER_DATA)
	return {
		type: ACTION_TYPE.SET_USER,
		payload: {
			roleId: ROLE.GUEST,
			email: null,
			id: null,
		},
	};
};
