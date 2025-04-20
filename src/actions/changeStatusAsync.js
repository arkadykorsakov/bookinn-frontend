import { request } from '../utils/request';
import { updateBooking } from './updateBooking';

export const changeStatusAsync = (bookingId, data) => (dispatch) =>
	request(`/bookings/${bookingId}/status`, 'PATCH', data).then(res => {
		if (res.data) {
			dispatch(updateBooking(res.data.booking));
		}
		return res;
	});
