import PropTypes from 'prop-types';
import Form from '../form';
import yup from '../../constants/yup';
import Select from '../select';
import { BOOKED, PENDING, REJECTED, STATUSES } from '../../constants/statuses';
import { useDispatch } from 'react-redux';
import { changeStatusAsync } from '../../actions';

const schema = yup.object().shape({
	status: yup.number().required(),
});

const StatusForm = ({ bookingId, onEndSubmit, defaultStatus }) => {
	const dispatch = useDispatch();
	const onSubmit = (values, { reset }) => {
		dispatch(changeStatusAsync(bookingId, values));
		reset();
		onEndSubmit();
	};

	return <Form
		validationSchema={schema}
		defaultValues={{ status: defaultStatus }}
		onSubmit={onSubmit}
		button={
			{ label: 'Обновить статус' }
		}>
		<Select name="status" label="Статус" options={[
			{ label: STATUSES[PENDING], value: PENDING },
			{ label: STATUSES[BOOKED], value: BOOKED },
			{ label: STATUSES[REJECTED], value: REJECTED },
		]} />
	</Form>;
};

StatusForm.propTypes = {
	bookingId: PropTypes.string.isRequired,
	onEndSubmit: PropTypes.func.isRequired,
	defaultStatus: PropTypes.number.isRequired,
};

export default StatusForm;
