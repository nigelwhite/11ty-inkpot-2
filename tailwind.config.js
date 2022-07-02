module.exports = {
	content: ['./**/*.html'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {},
			backgroundImage: (theme) => ({
				'vista-sm': "url('/static/img/bg-sm.jpg')",
				'vista-lg': "url('/static/img/bg-lg.jpg')",
				'vista-md': "url('/static/img/bg-md.jpg')",
				'vista-lg': "url('/static/img/bg-lg.jpg')",
				'vista-2xl': "url('/static/img/bg-2xl.jpg')",
			}),
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-debug-screens'),
	],
};
