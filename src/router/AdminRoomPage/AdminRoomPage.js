import { useParams } from 'react-router';

function AdminRoomPage() {
	const { id } = useParams();
	return <div>
		Админ Комната {id}
	</div>;
}

export default AdminRoomPage;
