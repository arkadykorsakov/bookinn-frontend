import { request } from '../utils/request';
import { addMeBooking } from './addMeBooking';

export const addBookingAsync = (roomId, data) => (dispatch) =>
	request(`/bookings/${roomId}`, 'POST', data)
		.then(res => {
			if (res.data) {
				dispatch(addMeBooking(res.data.booking));
			}
			return res;
		});
