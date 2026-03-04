// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://valentnluc.github.io',
    base: '/portfolio',
    image: {
        domains: ['images.unsplash.com', 'plus.unsplash.com'],
    },
});
