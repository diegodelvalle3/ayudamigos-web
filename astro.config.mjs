import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ayudamigos.org',
  integrations: [tailwind({ applyBaseStyles: false })],
});
