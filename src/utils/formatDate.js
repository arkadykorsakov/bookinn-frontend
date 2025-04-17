export default function formatDate(date) {
	return new Date(date).toLocaleDateString('ru-RU',{
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
