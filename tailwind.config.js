/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		maxWidth: {
			standardBtn: '512px',
		},
		// screens: {
		// 	md: '499px',
		// 	// => @media (min-width: 768px) { ... }

		// 	lg: '749px',
		// 	// => @media (min-width: 1024px) { ... }

		// 	xl: '1249px',
		// 	// => @media (min-width: 1280px) { ... }
		// },
		extend: {
			spacing: {
				100: '25rem',
				120: '30rem',
				160: '40rem',
			},
			minHeight: {
				32: '8rem',
				48: '12rem',
				64: '16rem',
			},
			minWidth: {
				16: '4rem',
				72: '16rem',
			},
			maxWidth: {
				96: '32rem',
			},
			width: {
				mid: '40rem',
			},
			colors: {
				primary: '#194440',
				primaryHov: '#12322f',
				primaryDark: '#132523',
				primarySelected: '#4E1F7A',

				themeBg: '#d3e2e0',

				card: '#b4ceca',
				cardHov: '#bbd2cf',

				themeBg2: '#c4d8d5',

				primaryText: '#E7E3BD',

				accent: '#4E75F3',
				accentHov: '#2857F0',

				error: '#E32987',
				success: '#9578F7',

				secondary: '#291f30',
				secondaryHov: '#D8D8D3',
				darkBg: '#682F7A',
			},

			// Meganne Ohata11:26
			// Accent colours:
			// - 4E75F3
			// - 782FBD

			// System Colour
			// - Error E72F92
			// - Success 9578F7
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
