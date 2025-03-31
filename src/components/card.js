import PropTypes from 'prop-types';

const Card = (props) => {
	return (
		<div className={`bg-[#fff] text-[#2c2f3f] p-6 rounded-lg shadow-lg ${props.className ?? ''}`}>
			{props.children}
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Card;
