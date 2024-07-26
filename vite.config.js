import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Set the base path for the application
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
  server: {
    port: 3000, // Set the port for the development server
    open: true, // Open the browser automatically
  },
});
