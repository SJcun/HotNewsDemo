# 热点新闻聚合平台

这是一个基于React和Express的热点新闻聚合平台，可以实时获取各大网站的热点新闻，包括微博热搜、知乎热榜、今日头条等15个主流平台的热点数据。

## 项目结构

```
HotNews/
  ├── Server/                 # 后端服务
  │   ├── .env               # 环境变量文件，包含COZE_TOKEN
  │   ├── index.js           # 主应用程序入口文件
  │   ├── package.json       # 项目依赖配置
  │   ├── test.html          # API测试用HTML文件
  │   └── README.md          # 后端项目说明文档
  │
  ├── Hot-News/              # 前端应用
  │   ├── hot-news-app/      # React应用
  │   │   ├── public/        # 静态资源
  │   │   ├── src/           # 源代码
  │   │   │   ├── components/# 组件目录
  │   │   │   │   ├── NewsDashboard.js    # 新闻看板组件
  │   │   │   │   ├── NewsDashboard.css   # 看板样式
  │   │   │   │   ├── NewsItem.js         # 新闻项组件
  │   │   │   │   └── NewsItem.css        # 新闻项样式
  │   │   │   ├── App.js     # 主应用组件
  │   │   │   ├── App.css    # 主应用样式
  │   │   │   ├── index.js   # 应用入口
  │   │   │   └── index.css  # 全局样式
  │   │   └── package.json   # 前端依赖配置
  │
  └── README.md              # 项目总体说明文档（本文件）
```

## 功能特点

- **多平台热点聚合**：一站式获取15个主流平台的热点新闻
- **实时数据更新**：支持手动刷新获取最新热点
- **美观的UI界面**：采用Ant Design组件库，提供现代化的用户体验
- **响应式设计**：适配各种设备屏幕尺寸

## 技术栈

### 前端
- React.js
- Ant Design
- Axios

### 后端
- Node.js
- Express
- Axios

## 如何启动项目

### 启动后端服务

1. 进入Server目录
   ```
   cd Server
   ```

2. 安装依赖
   ```
   npm install
   ```

3. 启动服务
   ```
   npm start
   ```
   或开发模式启动：
   ```
   npm run dev
   ```

### 启动前端应用

1. 进入前端应用目录
   ```
   cd Hot-News/hot-news-app
   ```

2. 安装依赖
   ```
   npm install
   ```

3. 启动应用
   ```
   npm start
   ```

4. 在浏览器中访问 http://localhost:5555 查看应用

## 注意事项

- 请确保后端服务运行在5556端口
- 在前端目录下创建.env文件，填写启动端口

```
PORT=5555 
```

- 需要在Server目录下配置.env文件，包含COZE_TOKEN环境变量和两个id（这方面涉及到在Coze平台发布API）

```
COZE_TOKEN=[your token]
WORKFLOW_ID=[your flow id]
APP_ID=[your app id]
```

- 前端应用默认连接到localhost:5556的后端API

## 界面预览

应用采用现代化设计，提供卡片式布局展示各平台热点新闻，支持响应式适配各种设备屏幕。
