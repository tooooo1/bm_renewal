import react from '@vitejs/plugin-react';
import { adorableCSS } from 'adorable-css/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [adorableCSS(), react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@mocks',
        replacement: resolve(__dirname, 'src/mocks'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
      {
        find: '@types',
        replacement: resolve(__dirname, 'src/types'),
      },
    ],
  },
});
