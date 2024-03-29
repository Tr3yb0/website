const plugin = require('tailwindcss/plugin')

module.exports = {

	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme('fontSize.2xl') },
				h2: { fontSize: theme('fontSize.xl') },
				h3: { fontSize: theme('fontSize.lg') },
				b: { fontWeight: theme('fontWeight.semibold')}
			});
		}),
	],
}

