/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: "#2c2f3f",
				'background-base': "#b8c5d8",
			},
		},
	},
	plugins: [],
};

