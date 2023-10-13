/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				main: "url('../images/background.webp')",
			},
			fontFamily: {
				bebas: ['Bebas Neue Pro'],
			},
		},
	},
	plugins: [],
};
