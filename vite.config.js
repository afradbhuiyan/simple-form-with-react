import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const mode = process.env.NODE_ENV;
// https://vitejs.dev/config/
export default defineConfig({
  base: mode === 'production' ? '/simple-form-with-react/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [react()]
});
