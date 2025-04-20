import { request } from '../utils/request';
import { setRooms } from './setRooms';

export const loadRoomsAsync = () => (dispatch) =>
	request('/rooms')
		.then(roomsData => {
			if (roomsData.data) {
				dispatch(setRooms(roomsData.data.rooms));
			}
			return roomsData;
		});
