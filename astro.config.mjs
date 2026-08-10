import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://paulmoralesg.github.io',
  base: '/sara-fotografia',
  output: 'static',
  build: { assets: 'assets' }
});
