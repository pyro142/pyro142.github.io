import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to '/' when moving to your own domain
// For GitHub Pages it should be '/garbutt.it/' or '/' if using a custom domain
export default defineConfig({
  plugins: [react()],
  base: '/',
})
