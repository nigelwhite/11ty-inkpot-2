module.exports = {
	content: ['./**/*.html'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {},
			backgroundImage: (theme) => ({
				'vista-sm': "url('/static/img/bg/bg-sm.jpg')",
				'vista-lg': "url('/static/img/bg/bg-lg.jpg')",
				'vista-md': "url('/static/img/bg/bg-md.jpg')",
				'vista-lg': "url('/static/img/bg/bg-lg.jpg')",
				'vista-2xl': "url('/static/img/bg/bg-2xl.jpg')",
			}),
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-debug-screens'),
	],
};
