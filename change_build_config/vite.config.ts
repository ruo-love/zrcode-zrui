import {
  defineConfig
} from 'vite'
import {
  resolve
} from 'path'
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.md$/, /\.vue$/
      ]
    }),
    Markdown(),
  ],
  resolve: {
    alias: [
      {
        find: '@', replacement: resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/var.scss";',
        charset: false
      },
    },
  },
})
