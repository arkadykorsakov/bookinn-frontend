import {
	ADMIN_ROOMS_PATH,
	AUTH_PATH, CLIENT_BOOKINGS_PATH,
	INDEX_PATH,
	ROOMS_PATH, ROUTE_ADMIN_ROOM, ROUTE_ADMIN_ROOMS,
	ROUTE_AUTH, ROUTE_CLIENT_BOOKINGS,
	ROUTE_INDEX,
	ROUTE_ROOM,
	ROUTE_ROOMS,
} from '../constants/routes';
import IndexPage from './IndexPage';
import AuthPage from './AuthPage';
import RoomPage from './RoomPage';
import RoomsPage from './RoomsPage';
import AdminRoomsPage from './AdminRoomsPage/AdminRoomsPage';
import ClientBookingsPage from './ClientBookingsPage';
import AdminRoomPage from './AdminRoomPage';
import { ROLE } from '../constants/roles';

const GUEST_ROUTES = [
	{
		id: ROUTE_AUTH,
		component: AuthPage,
		path: AUTH_PATH,
	},
];

const USER_ROUTES = [
	{
		id: ROUTE_INDEX,
		component: IndexPage,
		path: INDEX_PATH,
	},
	{
		id: ROUTE_ROOMS,
		component: RoomsPage,
		path: ROOMS_PATH,
	},
	{
		id: ROUTE_ROOM,
		component: RoomPage,
		path: ROOMS_PATH + '/:id',
	},
	{
		id: ROUTE_CLIENT_BOOKINGS,
		component: ClientBookingsPage,
		path: CLIENT_BOOKINGS_PATH,
	},
];

const ADMIN_ROUTES = [
	{
		id: ROUTE_ADMIN_ROOMS,
		component: AdminRoomsPage,
		path: ADMIN_ROOMS_PATH,
	},
	{
		id: ROUTE_ADMIN_ROOM,
		component: AdminRoomPage,
		path: ADMIN_ROOMS_PATH + '/:id',
	},
];


const router = {
	[ROLE.GUEST]: GUEST_ROUTES,
	[ROLE.USER]: USER_ROUTES,
	[ROLE.ADMIN]: ADMIN_ROUTES,
};

export default router;
