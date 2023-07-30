# 确保脚本抛出遇到的错误
set -e

# 加载目录
cd D:/Apps/notes

# 拉取仓库
git pull git@github.com:perthun/perthun.github.io.git main

# 复制配置文件
D:/Apps/rclone/rclone copy Z:/04-Backup/notes D:/Apps/notes/ -v --progress --local-encoding=None

# 同步笔记文件
D:/Apps/rclone/rclone sync Z:/03-笔记/会计实操 D:/Apps/notes/src/会计实操 --exclude "*.json" -v --progress --local-encoding=None
D:/Apps/rclone/rclone sync Z:/03-笔记/应用手册 D:/Apps/notes/src/应用手册 --exclude "*.json" -v --progress --local-encoding=None

# 提交&推送
git add -A
git commit -m 'deploy'
git push -f git@github.com:perthun/perthun.github.io.git main
