import React from 'react';

export const useModal = (initialState = false) => {
	const [isOpen, setIsOpen] = React.useState(initialState);

	const handleClose = React.useCallback(() => {
		setIsOpen(false);
	}, []);

	const handleOpen = React.useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleToggle = React.useCallback(() => {
		setIsOpen(prevState => !prevState);
	}, []);

	return {
		isOpen,
		handleClose,
		handleOpen,
		handleToggle,
	};
};
