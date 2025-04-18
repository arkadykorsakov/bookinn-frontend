import { request } from '../utils/request';
import { setRoomBookingForRoom } from './setRoomBookingForRoom';

export const loadRoomBookingsByRoomIdAsync = (roomId) => (dispatch) => request(`/room-bookings/${roomId}`).then(bookingsData => {
	console.log(bookingsData);
	if(bookingsData.data){
		dispatch(setRoomBookingForRoom(bookingsData.data.roomBookings));
	}
	return bookingsData;
});
