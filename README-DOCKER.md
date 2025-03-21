# 热点新闻聚合平台 - Docker部署指南

本文档提供如何使用Docker和Docker Compose部署热点新闻聚合平台的指南。

## 前提条件

确保您的系统已安装以下软件：

- Docker（推荐20.10.0或更高版本）
- Docker Compose（推荐2.0.0或更高版本）

## 配置文件说明

项目包含以下Docker相关文件：

- `Server/Dockerfile` - 后端服务的Docker配置
- `Hot-News/hot-news-app/Dockerfile` - 前端应用的Docker配置
- `Hot-News/hot-news-app/nginx.conf` - Nginx配置文件，用于前端容器
- `docker-compose.yml` - Docker Compose配置文件，用于编排前后端容器
- `.dockerignore` - 定义构建Docker镜像时要忽略的文件

## 环境变量配置

请确保在启动前正确配置环境变量：

1. 在`Server`目录下创建`.env`文件，包含以下内容：
   ```
   COZE_TOKEN=your_coze_token
   BOT_ID=your_bot_id
   MODEL_ID=your_model_id
   ```

## 部署步骤

1. 克隆项目到本地：
   ```bash
   git clone <项目仓库URL>
   cd HotNews
   ```

2. 使用Docker Compose构建并启动所有服务：
   ```bash
   docker-compose up -d
   ```

3. 应用将在以下地址可用：
   - 前端：http://localhost:5555
   - 后端API：http://localhost:5556

## 端口配置说明

本项目使用以下端口：
- 前端服务：内部使用8080端口，映射到主机的5555端口
- 后端服务：使用5556端口

如果需要修改这些端口映射，请编辑`docker-compose.yml`文件中的相应配置。

## 常用命令

- 启动所有服务：`docker-compose up -d`
- 停止所有服务：`docker-compose down`
- 查看日志：`docker-compose logs -f`
- 重新构建服务：`docker-compose build`
- 重启特定服务：`docker-compose restart <服务名>`
  - 例如：`docker-compose restart backend`

## 故障排查

如果遇到问题，请尝试以下步骤：

1. 检查日志：`docker-compose logs -f`
2. 确认环境变量配置正确
3. 确保端口5555和5556没有被其他应用占用
4. 如果修改了代码，请重新构建：`docker-compose up -d --build`

## 生产环境注意事项

在生产环境中部署时，建议：

1. 修改`.env`文件中的敏感信息
2. 配置HTTPS
3. 考虑添加容器监控
4. 配置自动重启策略 