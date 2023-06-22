import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import langJsx from "vite-plugin-lang-jsx";
import path, { resolve } from "path";


export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: 8080,
    },
    plugins: [
      langJsx(),
      createVuePlugin({
        jsx: true,
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [
          path.resolve(process.cwd(), "preview/icons"),
        ],
        // 指定symbolId格式
        symbolId: "[name]",
      }),
      // vueJsx()
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        cpts: resolve(__dirname, "packages"),
        vws: resolve(__dirname, "src/views"),
      },
    },
    base: "./", // 打包路径
  };
});
