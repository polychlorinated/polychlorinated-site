import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://polychlorinated.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
