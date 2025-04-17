import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Loader from '../../components/loader';
import Title from '../../components/title';
import { loadMeBookingsAsync } from '../../actions';
import { getMeBookings } from '../../selectors/getMeBookings';
import BookingCard from '../../components/booking/BookingCard';

function ClientBookingsPage() {
	const dispatch = useDispatch();
	const meBookings = useSelector(getMeBookings);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		setIsLoading(true);
		dispatch(loadMeBookingsAsync()).then((data) => {
			if (data.error) {
				setError(data.error);
			}
		}).finally(() => setIsLoading(false));
	}, [dispatch]);

	if (isLoading) return <Loader />;

	if (error) return <Title>{error}</Title>;

	return <section className="mb-8">
		<Title tag="h1" className="mb-5">Забронированные клиентом комнаты</Title>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

			{!!meBookings?.length && meBookings.map((booking) => (
				<BookingCard
					booking={booking}
					key={booking.id}
				/>
			))}
		</div>
	</section>;
}

export default ClientBookingsPage;
