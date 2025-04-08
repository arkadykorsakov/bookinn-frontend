import { request } from '../utils/request';
import { setEmptyRooms } from './setEmptyRooms';

export const loadEmptyRoomsAsync = () => (dispatch) => request('/rooms/empty').then(roomsData=>{
	if(roomsData.data){
		dispatch(setEmptyRooms(roomsData.data.rooms));
	}
	return roomsData;
})
