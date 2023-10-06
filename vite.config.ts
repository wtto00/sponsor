import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { URL, fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sponsor/',
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    }
  }
})
