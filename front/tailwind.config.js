/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
		'./src/modules/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				main: "url('../images/background.webp')",
				bio: "url('../images/photo_bio.webp')",
				wall: "url('../images/bg_insta.webp')",
				invert: "url('../images/bg_neg.webp')",
			},
			fontFamily: {
				'bebas': ['Bebas Neue Pro'],
				'G-Ultra': ['Gotham Ultra'],
				'G-Light': ['Gotham Light'],
				'G-Bold': ['Gotham Bold'],
				'G-Black': ['Gotham Black'],
				'G-Medium': ['Gotham Medium'],
			},
			scale: {
				200: '2',
			},
		},
	},
	plugins: [],
};
