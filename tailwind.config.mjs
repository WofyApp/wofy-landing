import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {

		extend: {
			colors: {
				"wofy-black": " #3e4653",
				"wofy-white": "#fdfdfd",
				'puerto-rico': {
					'50': '#f0fdf9',
					'100': '#cdfaed',
					'200': '#9cf3dc',
					'300': '#62e6c8',
					'400': '#34d0b2',
					'500': '#18b499',
					'600': '#11907d',
					'700': '#127366',
					'800': '#135c52',
					'900': '#154c45',
					'950': '#052e2a',
				},

			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.no-scrollbar::-webkit-scrollbar': {
					'display': 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
			})
		}),
	],
}
