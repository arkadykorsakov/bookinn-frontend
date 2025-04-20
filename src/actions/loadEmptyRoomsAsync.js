import { request } from '../utils/request';
import { setEmptyRooms } from './setEmptyRooms';

export const loadEmptyRoomsAsync = () => (dispatch) =>
	request('/rooms/empty')
		.then(res => {
			if (res.data) {
				dispatch(setEmptyRooms(res.data.rooms));
			}
			return res;
		});
