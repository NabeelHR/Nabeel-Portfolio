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
			minWidth: {
				16: '4rem',
				72: '16rem',
			},
			maxWidth: {
				96: '24rem',
			},
			colors: {
				primary: '#194440',
				primaryHov: '#12322f',
				primarySelected: '#4E1F7A',

				primaryText: '#E7E3BD',

				accent: '#4E75F3',
				accentHov: '#2857F0',

				error: '#E32987',
				success: '#9578F7',

				secondary: '#682F7A',
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
	plugins: [],
};
