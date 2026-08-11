import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://paulmoralesg.github.io',
  base: '/portafolio',
  output: 'static',
  build: { assets: 'assets' }
});
