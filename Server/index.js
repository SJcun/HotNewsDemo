// 引入所需的库
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

// 加载环境变量
dotenv.config();

// 创建Express应用
const app = express();

// 配置中间件
app.use(cors());
app.use(express.json());

// 获取环境变量
const COZE_TOKEN = process.env.COZE_TOKEN;
const WORKFLOW_ID = process.env.WORKFLOW_ID;
const APP_ID = process.env.APP_ID;

// 确保环境变量存在
if (!COZE_TOKEN) {
  console.error('COZE_TOKEN环境变量未设置！');
  process.exit(1);
}

if (!WORKFLOW_ID) {
  console.error('WORKFLOW_ID环境变量未设置！');
  process.exit(1);
}

if (!APP_ID) {
  console.error('APP_ID环境变量未设置！');
  process.exit(1);
}

// 热点新闻API路由
app.get('/api/hotnews', async (req, res) => {
  try {
    // 配置请求Coze API的选项
    const options = {
      method: 'POST',
      url: 'https://api.coze.cn/v1/workflow/run',
      headers: {
        'Authorization': `Bearer ${COZE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data: {
        parameters: {},
        workflow_id: WORKFLOW_ID,
        app_id: APP_ID
      }
    };

    // 发送请求到Coze API
    const response = await axios(options);
    
    // 如果响应成功
    if (response.data && response.data.code === 0) {
      // 解析返回的数据
      const jsonData = JSON.parse(response.data.data);
      res.json(jsonData);
    } else {
      // 如果API响应不成功
      res.status(500).json({ 
        error: '从Coze获取数据失败', 
        details: response.data 
      });
    }
  } catch (error) {
    // 处理异常
    console.error('获取热点新闻时发生错误:', error);
    res.status(500).json({ 
      error: '服务器内部错误', 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// 设置服务器端口
const PORT = process.env.PORT || 5556;

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器已在端口 ${PORT} 上启动`);
}); 