import UnoCSS from '@unocss/astro'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://wtto00.github.io/',
  base: '/sponsor/',
  trailingSlash: 'never',
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
})
