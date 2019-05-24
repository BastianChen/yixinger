# yixinger部署说明
该项目由两部分组成：
1. 后端代码yixinger-server
2. 前端代码yixinger-qianduan

## 后端代码部署步骤：
1. 打开yixinger-server里的pom.xml
2. 等待maven安装jar包
3. 若没有下载lombok插件需要下载该插件

## 前端代码部署步骤：
1. 直接打开yixinger-qianduan项目即可
2. 如果没有安装node.js请先安装node.js，若已安装可跳过该步骤
3. 在控制台输入npm install 下载相关依赖
4. 在控制台输入npm run dev:wx 启动项目
5. 用微信web开发者工具选择该项目刚刚编译好的dist目录里的wx文件夹进行导入
