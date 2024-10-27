// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    typescript: {
    tsconfig: './tsconfig.json', // Confirma que esta ruta es correcta
  },
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react()]
});
