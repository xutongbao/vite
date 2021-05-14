import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true 
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    sourcemap: true
  },
  base: '/vite',
  resolve: {
    alias: {
      '@': __dirname + '/src'
    }
  },    
  plugins: [vue()]
})
