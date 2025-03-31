import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	return (
		<button
			type={props.type ?? 'button'}
			onClick={props.onClick}
			disabled={props.disabled}
			className="px-4 py-2 rounded-lg transition-colors duration-200
				bg-[#d5dce8] text-[#2c2f3f]
				hover:bg-[#b8c5d8]
				active:bg-[#95a8c5]
				disabled:bg-[#e7ebf2] disabled:text-[#95a8c5] disabled:cursor-not-allowed"
		>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
