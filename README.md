# Yasmine's Portfolio Page 🌟

一个使用 Next.js 13+ 构建的现代化个人简历网站，融合了梵高星空风格的动态效果和精美的交互设计。

## ✨ 特点

- 🎨 梵高星空风格的项目展示页面
- 🌓 动态背景和毛玻璃效果
- 📱 完全响应式设计
- ⚡ 流畅的页面过渡动画
- 🎯 交互式导航系统
- 💫 精美的悬停效果
- 🌈 渐变色和现代化UI设计

## 🛠 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: React Icons
- **包管理**: npm
- **代码规范**: ESLint
- **版本控制**: Git

## 🚀 快速开始

1. 克隆项目

git clone https://github.com/yourusername/Yasmine_page.git
cd Yasmine_page


2. 安装依赖
bash
npm install

3. 启动开发服务器
npm run dev


4. 打开浏览器访问 `http://localhost:3000`

## 📦 部署指南

### Vercel 部署（推荐）
1. 在 [Vercel](https://vercel.com) 创建账号
2. 导入 GitHub 仓库
3. 点击 "Deploy"
4. 等待部署完成即可访问

### 自托管部署
1. 构建生产版本

npm run build

2. 启动生产服务器

npm start

3. 使用 PM2 持久化运行（可选）

npm install -g pm2
pm2 start npm --name "yasmine-portfolio" -- start


### Docker 部署
1. 构建镜像
docker build -t yasmine-portfolio .

2. 运行容器
docker run -p 3000:3000 yasmine-portfolio


## 🎨 自定义主题

### 颜色主题
修改 `tailwind.config.ts` 中的颜色配置：
typescript
theme: {
extend: {
colors: {
primary: '#2563eb',
// 添加自定义颜色
},
},
}


### 图片资源
在 `public/images/` 目录下替换以下图片：
- `profile-photo.jpg` (400x400px) - 个人照片
- `city-background.jpg` (1920x1080px) - 城市背景
- `hero-bg.jpg` (1920x1080px) - 主页背景
- `school.jpg` (1920x1080px) - 学校背景
- `daily/*.jpg` (800x800px) - 生活照片
- `projects/*.jpg` (1200x800px) - 项目截图

## 📝 内容更新指南

### 个人信息
修改 `components/Profile.tsx` 中的个人信息：
- 姓名
- 职位
- 社交媒体链接
- 个人简介

### 教育背景
在 `components/Education.tsx` 中更新教育经历：
- 学校信息
- 学位信息
- GPA
- 奖学金信息

### 项目经验
在 `components/VanGoghProjects.tsx` 中添加项目：
- 项目名称
- 项目描述
- 使用技术
- 项目成就

## 🔧 环境要求

- Node.js >= 16.8.0
- npm >= 7.0.0
- Git
- 现代浏览器支持

## 💻 开发指南

### 代码规范
- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 TypeScript 严格模式

### 分支管理
- `main`: 生产环境分支
- `develop`: 开发环境分支
- `feature/*`: 新功能分支
- `hotfix/*`: 紧急修复分支

### 提交规范

feat: 添加新功能
fix: 修复问题
docs: 修改文档
style: 修改样式
refactor: 代码重构
test: 添加测试
chore: 修改构建过程或辅助工具

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 🐛 问题反馈

如果你发现任何问题或有改进建议，请：
1. 查看 [Issues](https://github.com/yourusername/Yasmine_page/issues) 是否已存在相关问题
2. 创建新的 Issue，详细描述问题或建议
3. 如果可能，提供复现步骤或示例代码

## 📄 许可证

MIT License - 查看 [LICENSE.md](LICENSE.md) 获取详细信息

## 👩‍💻 作者

阿甘 (Yasmine Yang)
- Email: [your-email@example.com]
- LinkedIn: [your-linkedin]
- GitHub: [your-github]
- 个人网站: [your-website]

## 🙏 致谢

- Next.js 团队提供的出色框架
- Framer Motion 提供的流畅动画
- Tailwind CSS 团队的优秀样式解决方案
- 所有贡献者和使用者

## 📈 更新日志

### v1.0.0 (2024-03-15)
- 初始版本发布
- 实现基础功能和界面
- 添加梵高星空风格

### v1.1.0 (计划中)
- [ ] 添加深色模式
- [ ] 优化移动端体验
- [ ] 添加多语言支持