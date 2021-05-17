import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true 
  },
  build: {
    outDir: 'docs/vite',
    assetsDir: 'assets',
    sourcemap: true
  },
  base: '/vite/vite',
  resolve: {
    alias: {
      '@': __dirname + '/src'
    }
  },    
  plugins: [vue()]
})
