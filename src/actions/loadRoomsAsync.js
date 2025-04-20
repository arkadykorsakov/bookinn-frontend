import { request } from '../utils/request';
import { setRooms } from './setRooms';

export const loadRoomsAsync = () => (dispatch) =>
	request('/rooms')
		.then(res => {
			if (res.data) {
				dispatch(setRooms(res.data.rooms));
			}
			return res;
		});
