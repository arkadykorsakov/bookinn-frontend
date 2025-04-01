import { toaster } from '../constants/toast';
import { apiErrors } from '../constants/apiErrors';

const generateApiError = (response) => {
	toaster(apiErrors[response.error] ?? 'Неизвестная ошибка', 'error');
};

export default generateApiError;
