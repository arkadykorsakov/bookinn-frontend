import { request } from '../utils/request';
import { setRoom } from './setRoom';

export const loadRoomAsync = (roomId) => (dispatch) =>
	request(`/rooms/${roomId}`).then(res => {
		if (res.data) {
			dispatch(setRoom(res.data.room));
		}
		return res;
	});
