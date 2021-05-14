import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true 
  },
  build: {
    outDir: 'docs',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': __dirname + '/src'
    }
  },    
  plugins: [vue()]
})
