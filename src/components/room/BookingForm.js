import PropTypes from 'prop-types';
import Form from '../form';
import Input from '../input';
import yup from '../../constants/yup';
import { useDispatch } from 'react-redux';
import { addBookingAsync } from '../../actions';
import { toaster } from '../../constants/toast';
import { useNavigate } from 'react-router';
import { CLIENT_BOOKINGS_PATH } from '../../constants/routes';

const today = new Date();
today.setHours(0, 0, 0, 0);

const schema = yup.object().shape({
	startDate: yup
		.date()
		.transform((value, originalValue) => {
			const date = new Date(originalValue);
			return isNaN(date.getTime()) ? undefined : date;
		})
		.typeError('Введите корректную дату')
		.required('Дата начала обязательна')
		.min(today, 'Дата начала не может быть в прошлом'),

	endDate: yup
		.date()
		.transform((value, originalValue) => {
			const date = new Date(originalValue);
			return isNaN(date.getTime()) ? undefined : date;
		})
		.typeError('Введите корректную дату')
		.required('Дата окончания обязательна')
		.when('startDate', (startDate, schema) =>
			startDate
				? schema.min(startDate, 'Дата окончания должна быть позже даты начала')
				: schema,
		),
});

const BookingForm = ({ isEdit, roomId, onEndSubmit }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSubmit = (values, { reset }) => {
		if (isEdit) {

		} else {
			dispatch(addBookingAsync(roomId, values));
			navigate(CLIENT_BOOKINGS_PATH);
			toaster('Заявка отправлена', 'success');
		}
		reset();
		onEndSubmit();
	};

	return <Form
		validationSchema={schema}
		onSubmit={onSubmit}
		button={
			{ label: isEdit ? 'Обновить бронь' : 'Забронировать' }
		}>
		<Input name="startDate" label="Дата прибытия" type="date" />
		<Input name="endDate" label="Дата убытия" type="date" />
	</Form>;
};

BookingForm.propTypes = {
	isEdit: PropTypes.bool,
	roomId: PropTypes.string.isRequired,
	onEndSubmit: PropTypes.func.isRequired,
};

export default BookingForm;
