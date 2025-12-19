import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cv/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // You can add more configuration options here
});
