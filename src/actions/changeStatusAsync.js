import { request } from '../utils/request';
import generateApiError from '../utils/generateApiError';
import { updateBooking } from './updateBooking';

export const changeStatusAsync = (bookingId, data) => (dispatch) =>
	request(`/bookings/${bookingId}/status`, 'PATCH', data).then(res => {
		if (res.error) {
			return generateApiError(res.error);
		}
		dispatch(updateBooking(res.data.booking));
	});
