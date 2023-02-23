import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: './',
  server: {
    open: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/index.html'),
        blogs: resolve(__dirname, './src/pages/blogs.html'),
        mistakes: resolve(__dirname, './src/pages/blogs/mistakes.html'),
      },
    },
  },
});
