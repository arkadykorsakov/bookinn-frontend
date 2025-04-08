export function request(url, method, data) {
	return fetch(process.env.REACT_APP_API_URL + url, {
		headers: {
			'content-type': 'application/json',
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined,
		credentials: 'include'
	}).then(res => res.json()).catch(err => console.log(err));
}
