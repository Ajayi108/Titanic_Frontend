// web-frontend/vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',       // ✅ needed for React DOM rendering
    globals: true,              // ✅ enables using `describe`, `it`, `expect` without importing
    setupFiles: './vitest.setup.js', // ✅ optional: for global config like extending jest-dom
  },
});
