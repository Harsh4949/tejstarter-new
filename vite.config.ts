import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// ...existing code...
// https://vitejs.dev/config/

// Remove custom ImportMetaEnv and ImportMeta interfaces to use Vite's built-in types.

export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  base: process.env.VITE_BASE_PATH || '/tejstarter-new/'
});