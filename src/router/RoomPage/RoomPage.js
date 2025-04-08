import { useParams } from 'react-router';
import Button from '../../components/button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRoomAsync } from '../../actions/loadRoomAsync';
import Title from '../../components/title';
import Loader from '../../components/loader';
import { getRoom } from '../../selectors';

function RoomPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState('');
	const room = useSelector(getRoom);

	React.useEffect(() => {
		setIsLoading(true);
		if (id) {
			dispatch(loadRoomAsync(id)).then((data) => {
				if (data.error) {
					setError(data.error);
				}
			}).finally(() => setIsLoading(false));
		}
	}, [dispatch, id]);

	if (isLoading) return <Loader />;

	if (error) return <Title>{error}</Title>;

	return <section>
		<Title tag="h1" className="mb-5">Номер</Title>
		<div className="bg-gray-100 border border-[#d5dce8] rounded-md p-4 flex flex-col md:flex-row gap-6">
			<div className="flex-shrink-0 w-full md:w-48 h-48 bg-gray-200 rounded-md overflow-hidden">
				<img
					src={room.imageUrl}
					alt="Фото номера"
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="flex flex-col justify-between flex-1">
				<p className="text-center md:text-left mb-4 md:mb-0">Информация о номере по запросу</p>
				<div className="md:self-end">
					<Button>
						Забронировать
					</Button>
				</div>
			</div>
		</div>
	</section>;
}

export default RoomPage;
