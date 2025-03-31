import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Input = (props) => {
	const inputId = React.useId();
	const { register, formState, getFieldState } = useFormContext();
	const { error } = getFieldState(props.name, formState);

	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={inputId} className="text-[#2c2f3f]">
				{props.label}
			</label>
			<input
				id={inputId}
				type={props.type ?? 'text'}
				{...register(props.name)}
				placeholder={props.placeholder ?? ''}
				disabled={props.disabled}
				className="px-4 py-2 rounded-lg border transition-colors duration-200
					bg-white text-[#2c2f3f] border-[#d5dce8]
					focus:border-[#95a8c5] focus:outline-none
					disabled:bg-[#e7ebf2] disabled:text-[#95a8c5] disabled:cursor-not-allowed"
			/>
			{error && <span className="text-red-500 text-sm">{error.message}</span>}
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'date', 'email', 'password']),
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Input;
