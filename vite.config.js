import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    react(),
    purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^p-/, /^pi-/],
        deep: [/^p-/],
        greedy: [/^p-/]
      }
    })
  ],

  build: {
    // Réduit le CSS inline threshold pour éviter trop de CSS inline
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/@reduxjs') || id.includes('node_modules/react-redux') || id.includes('node_modules/redux')) {
            return 'redux-vendor'
          }
          if (id.includes('node_modules/primereact')) {
            return 'primereact-vendor'
          }
        }
      }
    }
  }
})