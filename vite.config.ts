import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    preact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
