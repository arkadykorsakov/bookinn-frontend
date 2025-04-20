import { request } from '../utils/request';
import { deleteMeBooking } from './deleteMeBooking';

export const deleteMeBookingAsync = (bookingId) => (dispatch) =>
	request(`/bookings/${bookingId}`, 'DELETE')
		.then(res => {
			if (!res.error) {
				dispatch(deleteMeBooking(bookingId));
			}
			return res;
		});
