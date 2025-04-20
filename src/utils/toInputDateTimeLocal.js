export default function toInputDateTimeLocal(date) {
	const d = new Date(date);

	const timezoneOffset = d.getTimezoneOffset();
	const localDate = new Date(d.getTime() - timezoneOffset * 60 * 1000);

	return localDate.toISOString().slice(0, 16).split('T')[0];
}
