import { request } from '../utils/request';
import { setMeBookings } from './setMeBookings';

export const loadMeBookingsAsync = () => (dispatch) =>
	request('/bookings/me')
		.then(res => {
			if (res.data) {
				dispatch(setMeBookings(res.data.bookings));
			}
			return res;
		});
