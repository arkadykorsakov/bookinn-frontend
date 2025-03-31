import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Select = (props) => {
	const { register, getFieldState, formState } = useFormContext();
	const { error } = getFieldState(props.name, formState);
	const id = React.useId();

	return (
		<div className="flex flex-col gap-1">
			<label className="text-[#2c2f3f]" htmlFor={id}>
				{props.label}
			</label>
			<select
				id={id}
				{...register(props.name)}
				disabled={props.disabled ?? false}
				className="px-4 py-2 rounded-lg border transition-colors duration-200
					bg-[#d5dce8] text-[#2c2f3f] border-[#d5dce8]
					focus:border-[#95a8c5] focus:outline-none
					disabled:bg-[#e7ebf2] disabled:text-[#95a8c5] disabled:cursor-not-allowed"
			>
				<option disabled value="">{props.placeholder ?? 'Выберите элемент'}</option>
				{props.options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{error && <span className="text-red-500 text-sm">{error.message}</span>}
		</div>
	);
};

Select.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}),
	).isRequired,
	placeholder: PropTypes.string,
};

export default Select;
