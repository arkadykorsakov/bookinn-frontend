import { request } from '../utils/request';
import { setRoom } from './setRoom';

export const loadRoomAsync = (roomId) => (dispatch) =>
	request(`/rooms/${roomId}`).then(roomsData => {
		if (roomsData.data) {
			dispatch(setRoom(roomsData.data.room));
		}
		return roomsData;
	});
