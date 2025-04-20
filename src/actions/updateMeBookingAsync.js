import { request } from '../utils/request';
import { updateMeBooking } from './updateMeBooking';

export const updateMeBookingAsync = (bookingId, data) => (dispatch) =>
	request(`/bookings/${bookingId}`, 'PATCH', data).then(res => {
		if (res.data) {
			dispatch(updateMeBooking(res.data.booking));
		}
		return res;
	});

