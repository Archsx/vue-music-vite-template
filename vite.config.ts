import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { registerRoutesPlugin } from './backend/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), registerRoutesPlugin],
  optimizeDeps: {
    // include: ['pinyin'],
  },
})
