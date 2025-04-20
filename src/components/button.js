import React from 'react';
import PropTypes from 'prop-types';

const variantClasses = {
	primary: `
		bg-[#d5dce8] text-[#2c2f3f]
		hover:bg-[#b8c5d8]
		active:bg-[#95a8c5]
		disabled:bg-[#e7ebf2] disabled:text-[#95a8c5]
	`, danger: `
		bg-red-600 text-white
		hover:bg-red-700
		active:bg-red-800
		disabled:bg-red-300 disabled:text-white
	`,
};

const Button = ({ type = 'button', onClick, disabled, children, variant = 'primary' }) => {

	const baseClass = `px-4 py-2 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-1`;

	const variantClass = variantClasses[variant] || variantClasses.default;

	return (<button
		type={type}
		onClick={onClick}
		disabled={disabled}
		className={`${baseClass} ${variantClass}`}
	>
		{children}
	</button>);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	variant: PropTypes.oneOf(['primary', 'danger']),
};

export default Button;
