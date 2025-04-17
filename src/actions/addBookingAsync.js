import { request } from '../utils/request';
import generateApiError from '../utils/generateApiError';

export const addBookingAsync = (roomId, data) => (dispatch) => request(`/room-bookings/${roomId}`, 'POST', data).then(booking => {
	if(booking.error){
		generateApiError(booking.error);
	}
	console.log(booking);
});
