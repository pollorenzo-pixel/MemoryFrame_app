import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative asset URLs so the production build works on Vercel,
  // Netlify, local preview, and GitHub Pages subpath deployments.
  base: './',
})
