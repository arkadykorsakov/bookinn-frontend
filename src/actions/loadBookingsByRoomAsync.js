import { request } from '../utils/request';
import { setBookings } from './setBookings';

export const loadBookingsByRoomAsync = (roomId) => (dispatch) =>
	request(`/bookings/${roomId}`)
		.then(bookingsData => {
			if (bookingsData.data) {
				dispatch(setBookings(bookingsData.data.bookings));
			}
			return bookingsData;
		});
