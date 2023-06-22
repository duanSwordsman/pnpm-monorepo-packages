import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: 8080,
    },
    plugins: [
      createVuePlugin(),
      // vueJsx()
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        cpts: resolve(__dirname, "src/components"),
        vws: resolve(__dirname, "src/views"),
      },
    },
    base: "./", // 打包路径
  };
});
