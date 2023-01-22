/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        'secular-one': 'Secular One, sans-serif',
        'noto-sans': 'Noto Sans, sans-serif',
        'quicksand': 'Quicksand, sans-serif',
      },
    },
	},
	plugins: [],
}
