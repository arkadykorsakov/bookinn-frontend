import Title from '../../components/title';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRoomsAsync } from '../../actions';
import Loader from '../../components/loader';
import { getRooms } from '../../selectors/getRooms';
import RoomCard from '../../components/room/RoomCard';

function AdminRoomsPage() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const rooms = useSelector(getRooms);

	React.useEffect(() => {
		setIsLoading(true);
		dispatch(loadRoomsAsync()).then((data) => {
			if (data.error) {
				setError(data.error);
			}
		}).finally(() => setIsLoading(false));
	}, [dispatch]);

	if (isLoading) return <Loader />;

	if (error) return <Title>{error}</Title>;

	return <section>
		<Title tag="h1" className="mb-5">Статус номеров</Title>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{!!rooms?.length && rooms.map((room) => (
				<RoomCard key={room.id} room={room} isAdmin />
			))}
		</div>
	</section>;
}

export default AdminRoomsPage;
