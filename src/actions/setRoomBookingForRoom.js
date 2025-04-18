import { ACTION_TYPE } from './actionType';

export const setRoomBookingForRoom = (roomBookings) => {
	return {
		type: ACTION_TYPE.SET_ROOM_BOOKINGS_FOR_ROOM,
		payload: roomBookings,
	};
};
