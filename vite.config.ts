import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Aangepast voor custom domein
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
