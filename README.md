# pnpm-monorepo-packages

## 简介

`momorepo`, 将多个模块（前端业务组件）放到一个git仓库进行管理，统一工程构建流程、代码规范；同时也便于模块直接相互引用；

`pnpm`，新一代包管理工具，实现了节约磁盘空间，提升安装速度，同时扁平化的node_modules文件夹；内置了对monorepo的支持；

由于`lerna`已不再维护了，因此，采用以pnpm为基础，实现前端组件库的开发；


## 实现

1. 环境
```js
# node版本： >= 16.19.0
$ npm install -g pnpm
```

2. 工程结构

```js
---- docs: 文档文件夹（采用vuepress架构）
  |
  |- packages: 组件文件夹
  |
  |- preview： 实例文件夹
  |
  |- .changeset: 版本管理
  |
  |- vite.config.js：vite配置文件，本工程以vite作为工程化工具
  |
  |- pnpm-workspace.yaml: 启动pnpm的workspace功能，该文件指定工作空间目录
```

3. 全局公共依赖安装

```js
pnpm i -w vue
```

注：`-w`、`--workspace-root`，将指定的依赖安装到工程的跟目录下，作为所有package的公共依赖
