import React from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from './button';

function Form(props) {
	const methods = useForm({
		defaultValues: props.defaultValues ?? {},
		resolver: yupResolver(props.validationSchema),
	});

	const handleSubmit = (values) => {
		props.onSubmit(values, { reset: methods.reset });
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(handleSubmit)} className="flex flex-col gap-5">
				<div className="flex flex-col" style={{ rowGap: props.rowGap ?? 16 }}>
					{props.children}
				</div>
				<Button disabled={methods.formState.isSubmitting} type="submit">
					{props.button.label}
				</Button>
			</form>
		</FormProvider>
	);
}

Form.propTypes = {
	defaultValues: PropTypes.object,
	children: PropTypes.node.isRequired,
	onSubmit: PropTypes.func.isRequired,
	button: PropTypes.shape({
		label: PropTypes.string.isRequired,
	}).isRequired,
	rowGap: PropTypes.number,
	validationSchema: PropTypes.object.isRequired,
};

export default Form;
