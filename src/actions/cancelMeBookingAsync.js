import { request } from '../utils/request';
import { deleteMeBooking } from './deleteMeBooking';
import { updateMeBooking } from './updateMeBooking';

export const cancelMeBookingAsync = (bookingId) => (dispatch) =>
	request(`/bookings/${bookingId}/cancel`, 'PATCH')
		.then(res => {
			if (res.data) {
				dispatch(updateMeBooking(res.data.booking));
			}
			return res;
		});
