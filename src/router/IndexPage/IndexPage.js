import { Navigate } from 'react-router';
import { ROOMS_PATH } from '../../constants/routes';

function IndexPage() {
	return <Navigate to={ROOMS_PATH} />;
}

export default IndexPage;
