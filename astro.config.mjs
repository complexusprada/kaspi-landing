import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kaspirace.kz',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'kk'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
