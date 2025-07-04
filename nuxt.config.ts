// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
	app: {
		head: {
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap' }
			]
		}
	}
})
