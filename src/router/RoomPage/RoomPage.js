import { useParams } from 'react-router';

function RoomPage() {
	const { id } = useParams();
	return <div>
		Комната {id}
	</div>;
}

export default RoomPage;
