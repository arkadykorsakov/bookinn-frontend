import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {
	const Tag = props.tag || 'h2';

	const sizeClasses = {
		lg: 'text-3xl font-bold',
		md: 'text-2xl font-semibold',
		sm: 'text-xl font-medium',
	};

	const combinedClassName = `${sizeClasses[props.size || 'lg']} ${props.className}`.trim();

	return <Tag className={combinedClassName}>{props.children}</Tag>;
}

Title.propTypes = {
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	size: PropTypes.oneOf(['lg', 'md', 'sm']),
};
