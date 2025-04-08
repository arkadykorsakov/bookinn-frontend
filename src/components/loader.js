import PropTypes from 'prop-types';

function Loader(props) {
	return (
		<div className={props.isFullPage && 'flex items-center justify-center h-screen bg-white'}>
			<div className="w-12 h-12 border-4 border-[#2c2f3f] border-t-transparent rounded-full animate-spin"></div>
		</div>
	);
}

Loader.propTypes = {
	isFullPage: PropTypes.bool,
}

export default Loader;
