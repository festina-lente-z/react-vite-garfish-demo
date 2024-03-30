import { resolve } from 'path'
import { defineConfig } from 'vite'
const { default: react } = require('@vitejs/plugin-react-swc')

export default defineConfig({
  base: '/',
  server: {
    open: '/main/index.html',
    // origin: 'http://localhost:5173'
  },
  optimizeDeps: {
    include: ["rxjs"]
  }
  // plugins: [react()]
})