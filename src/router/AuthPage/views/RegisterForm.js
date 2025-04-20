import Form from '../../../components/form';
import Input from '../../../components/input';
import yup from '../../../constants/yup';
import { request } from '../../../utils/request';
import generateApiError from '../../../utils/generateApiError';
import { toaster } from '../../../utils/toaster';
import PropTypes from 'prop-types';


const registerSchema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required().min(8, 'Пароль должен быть минимум 8 символов'),
	repeatPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
});

function RegisterForm(props) {
	const onSubmit = (values, { reset }) => {
		request('/auth/register', 'POST', { email: values.email, password: values.password }).then(res => {
			if (res.error) {
				generateApiError(res);
			} else {
				reset();
				props.onEnd();
				toaster('Вы успешно зарегистрировались в системе', 'success');
			}
		});
	};
	return <Form
		onSubmit={onSubmit}
		button={{
			label: 'Войти',
		}}
		validationSchema={registerSchema}>
		<Input name="email" label="Email" />
		<Input name="password" label="Пароль" type="password" />
		<Input name="repeatPassword" label="Пароль" type="password" />
	</Form>;
}

RegisterForm.propTypes = {
	onEnd: PropTypes.func.isRequired,
};

export default RegisterForm;
