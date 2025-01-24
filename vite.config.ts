import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/viberisemewebsite/',  // Update for GitHub Pages
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
