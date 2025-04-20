import { toast } from 'react-toastify';

export const toaster = (msg, type) => toast(msg, {
	type: type ?? 'info',
	position: 'bottom-right',
});
