import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true
  },
  plugins: [
    vue({
      include: [/\.md$/, /\.vue$/]
    }),
    Markdown(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true
    })

  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      },
    },
    lib: {
      entry: "./src/packages/index.ts",
      formats: ['es', 'umd', 'cjs'],
      name: "zrui"
    },

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
