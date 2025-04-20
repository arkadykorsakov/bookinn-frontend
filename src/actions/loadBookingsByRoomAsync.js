import { request } from '../utils/request';
import { setBookings } from './setBookings';

export const loadBookingsByRoomAsync = (roomId) => (dispatch) =>
	request(`/bookings/${roomId}`)
		.then(res => {
			if (res.data) {
				dispatch(setBookings(res.data.bookings));
			}
			return res;
		});
