import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
	React.useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, [onClose]);

	React.useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : null;
	}, [isOpen]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
			 onClick={onClose}>
			<div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
				 onClick={e => e.stopPropagation()}>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
				>
					✕
				</button>
				{children}
			</div>
		</div>,
		document.body,
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node,
};

export default Modal;
