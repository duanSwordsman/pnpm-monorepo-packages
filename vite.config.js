import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2';
import vueJsx from '@vitejs/plugin-vue-jsx'

import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      createVuePlugin(),
      // vueJsx()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        cpts: resolve(__dirname, 'src/components'),
        vws: resolve(__dirname, 'src/views'),
      },
    },
    base: './', // 打包路径
  }
})