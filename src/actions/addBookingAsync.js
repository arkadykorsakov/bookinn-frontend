import { request } from '../utils/request';
import generateApiError from '../utils/generateApiError';
import { addMeBooking } from './addMeBooking';

export const addBookingAsync = (roomId, data) => (dispatch) =>
	request(`/bookings/${roomId}`, 'POST', data)
		.then(res => {
			if (res.error) {
				generateApiError(res.error);
			}
			if (res.data) {
				dispatch(addMeBooking(res.data.booking));
			}
		});
