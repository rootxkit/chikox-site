// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chikox.net',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
