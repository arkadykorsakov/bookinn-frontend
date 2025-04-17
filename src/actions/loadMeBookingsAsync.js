import { request } from '../utils/request';
import { setMeBookings } from './setMeBookings';

export const loadMeBookingsAsync = () => (dispatch) => request('/room-bookings/current-user').then(bookingsData => {
	if (bookingsData.data) {
		dispatch(setMeBookings(bookingsData.data.roomBookings));
	}
	return bookingsData;
});
