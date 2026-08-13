// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bhagathpranav.vercel.app',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
});
