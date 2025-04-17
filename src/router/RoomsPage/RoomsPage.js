import React from 'react';
import { loadEmptyRoomsAsync } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { getEmptyRooms } from '../../selectors';
import Loader from '../../components/loader';
import Title from '../../components/title';
import RoomCard from '../../components/room/RoomCard';

function RoomsPage() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const emptyRooms = useSelector(getEmptyRooms);

	React.useEffect(() => {
		setIsLoading(true);
		dispatch(loadEmptyRoomsAsync()).then((data) => {
			if (data.error) {
				setError(data.error);
			}
		}).finally(() => setIsLoading(false));
	}, [dispatch]);

	if (isLoading) return <Loader />;

	if(error) return <Title>{error}</Title>;

	return <section className="mb-8">
		<Title tag="h1" className="mb-5">Доступные номера</Title>

		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{
				!!emptyRooms?.length && emptyRooms.map((room, idx) => <RoomCard key={idx} room={room} />)
			}
		</div>
	</section>;
}

export default RoomsPage;
