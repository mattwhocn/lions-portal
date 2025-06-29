# Zhongtai 前端项目

基于 React + Ant Design + TypeScript 的前端项目。

## 环境要求

- Node.js >= 16
- PNPM >= 8

## 技术栈

- React 18
- TypeScript
- Ant Design 5
- Webpack 5
- React Router 6
- Less

## 开始使用

### 1. 安装 PNPM

如果你还没有安装 PNPM，请先全局安装：

```bash
pnpm install
```

注意：项目强制使用 PNPM 包管理器，使用 npm 或 yarn 将会报错。

### 3. 本地开发

启动开发服务器：

```bash
pnpm start
```

服务器启动后会自动打开浏览器访问 http://localhost:8080

### 4. 项目打包

```bash
pnpm build
```

打包后的文件将生成在 `dist` 目录下。

## 项目命令说明

- `pnpm start` - 启动开发服务器
- `pnpm build` - 生产环境打包
- `pnpm test` - 运行测试
- `pnpm lint` - 运行 ESLint 检查
- `pnpm lint:fix` - 运行 ESLint 检查并自动修复
- `pnpm format` - 使用 Prettier 格式化代码
- `pnpm format:check` - 检查代码格式是否符合 Prettier 规范

## 项目结构

```zhongtai/package.json
zhongtai/
├── src/
│   ├── assets/        # 静态资源文件
│   │   └── news-md/   # 新闻markdown文件
│   ├── components/    # 公共组件
│   ├── pages/        # 页面组件
│   │   ├── Home/     # 首页
│   │   └── News/     # 新闻页面
│   ├── utils/        # 工具函数
│   ├── App.tsx       # 应用入口组件
│   └── index.tsx     # 项目入口文件
├── public/           # 公共静态资源
├── package.json      # 项目配置文件
├── tsconfig.json     # TypeScript 配置
└── webpack.config.js # Webpack 配置
```

## 开发规范

- 使用 TypeScript 编写代码
- 遵循 ESLint 规则进行代码检查
- 使用 Prettier 进行代码格式化
- 组件文件使用 `.tsx` 后缀
- 工具函数文件使用 `.ts` 后缀

## 浏览器支持

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## 常见问题

### 1. 安装依赖时报错

确保你使用的是 PNPM：

```bash
npm install -g pnpm
```

### 2. 开发服务器启动失败

检查 8080 端口是否被占用，可以修改 webpack.config.js 中的端口配置。

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request