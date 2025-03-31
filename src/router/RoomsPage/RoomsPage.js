import React from 'react';
import Form from '../../components/form';
import Input from '../../components/input';
import Card from '../../components/card';
import Select from '../../components/select';
import yup from '../../constants/yup';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(5),
	name: yup.string().required(),
	status: yup.string().required(),
	startDate: yup.date().required().max(yup.ref('endDate'), 'Начальная дата должна быть меньше или равна конечной'),
	endDate: yup.date().required().min(yup.ref('startDate'), 'Конечная дата должна быть больше или равна начальной'),
});

function RoomsPage() {
	const onSubmit = (values, { reset }) => {
		console.log(values);
		reset();
	};
	return <div>
		Свободные комнаты
		<Card className="flex flex-col gap-5 max-w-[500px]">
			<Form onSubmit={onSubmit} button={{ label: 'Отправить', disabled: false }} validationSchema={schema}>
				<Input name="name" label="Имя"/>
				<Input name="startDate" type="date" label="Начало"/>
				<Input name="endDate" type="date" label="Конец"/>
				<Input name="email" type="email" label="Email"/>
				<Input name="password" type="password" label="Пароль"/>
				<Select name="status" options={[{ label: 'Ok', value: 'Ok' }, { label: 'Cancel', value: 'Cancel' }]} label="Статус"/>
			</Form>
		</Card>
	</div>;
}

export default RoomsPage;
