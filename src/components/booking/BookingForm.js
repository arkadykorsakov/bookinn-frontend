import PropTypes from 'prop-types';
import Form from '../form';
import Input from '../input';
import yup from '../../constants/yup';
import { useDispatch } from 'react-redux';
import { addBookingAsync, updateMeBookingAsync } from '../../actions';
import { useNavigate } from 'react-router';
import { CLIENT_BOOKINGS_PATH } from '../../constants/routes';
import { toaster } from '../../utils/toaster';

const today = new Date();
today.setHours(0, 0, 0, 0);

const schema = yup.object().shape({
	startDate: yup
		.date()
		.typeError('Введите корректную дату')
		.min(new Date(), 'Дата начала не может быть в прошлом'),

	endDate: yup
		.date()
		.typeError('Введите корректную дату')
		.min(
			yup.ref('startDate'),
			'Дата окончания должна быть позже даты начала',
		),
});

const BookingForm = ({ isEdit, roomId, onEndSubmit, defaultValues = {} }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSubmit = async (values, { reset }) => {
		if (isEdit) {
			dispatch(updateMeBookingAsync(defaultValues.bookingId, values)).then((res) => {
				if (res.error) {
					toaster(res.error, 'error');
				} else {
					toaster('Заявка обновлена', 'success');
				}
			});
		} else {
			dispatch(addBookingAsync(roomId, values)).then((res) => {
				if (res.error) {
					toaster(res.error, 'error');
				} else {
					toaster('Заявка отправлена', 'success');
					navigate(CLIENT_BOOKINGS_PATH);
				}
			});
		}
		reset();
		onEndSubmit();
	};

	return <Form
		validationSchema={schema}
		onSubmit={onSubmit}
		button={
			{ label: isEdit ? 'Обновить бронь' : 'Забронировать' }
		}
		defaultValues={defaultValues}
	>
		<Input name="startDate" label="Дата прибытия" type="date" />
		<Input name="endDate" label="Дата убытия" type="date" />
	</Form>;
};

BookingForm.propTypes = {
	isEdit: PropTypes.bool,
	roomId: PropTypes.string.isRequired,
	onEndSubmit: PropTypes.func.isRequired,
	defaultValues: PropTypes.shape({
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		bookingId: PropTypes.string.isRequired,
	}),
};

export default BookingForm;
