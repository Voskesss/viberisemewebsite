import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Voor aangepast domein (coliblanco.com)
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
