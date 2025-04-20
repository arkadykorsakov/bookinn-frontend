import Form from '../../../components/form';
import Input from '../../../components/input';
import yup from '../../../constants/yup';
import { request } from '../../../utils/request';
import generateApiError from '../../../utils/generateApiError';
import { setUser } from '../../../actions';
import { toaster } from '../../../utils/toaster';
import { useNavigate } from 'react-router';
import { ADMIN_ROOMS_PATH, ROOMS_PATH } from '../../../constants/routes';
import { useDispatch } from 'react-redux';


const loginSchema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required(),
});

export default function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onSubmit = (values, { reset }) => {
		request('/auth/login', 'POST', values).then(res => {
			if (res.error) {
				generateApiError(res);
			} else {
				dispatch(setUser(res.user));
				reset();
				toaster('Вы успешно вошли в систему', 'success');
				if (res.user.roleId === 1) {
					navigate(ADMIN_ROOMS_PATH);
				} else {
					navigate(ROOMS_PATH);
				}
			}
		});
	};
	return <Form
		onSubmit={onSubmit}
		button={{
			label: 'Войти',
		}}
		validationSchema={loginSchema}>
		<Input name="email" label="Email" />
		<Input name="password" label="Пароль" type="password" />
	</Form>;
}
