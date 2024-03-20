import { resolve } from 'path'
import { defineConfig } from 'vite'
const { default: react } = require('@vitejs/plugin-react-swc')

export default defineConfig({
  server: {
    open: '/main/index.html',
  },
  plugins: [react()]
})