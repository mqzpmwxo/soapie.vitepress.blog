<img src="/blog/assets/20240328105838.png" />

# Immich介绍
Immich是一款用于移动设备上备份照片和视频的自托管解决方案。它是一个开源项目。Immich旨在提供一个隐私保护的备份系统，让用户能够对自己的数据进行完全控制。
<img src="/blog/assets/20240328103608.png" />

官网：[https://immich.app](https://immich.app/)  
Github：[https://github.com/immich-app/immich](https://github.com/immich-app/immich)  

# 在NAS部署Immich相册
- 在该目录下建立名字为library的目录（该目录用来存放immich备份的照片和视频）
<img src="/blog/assets/20240328104415.png" />

- 下载官方docker-compose.yml
```
wget -O docker-compose.yml https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml
```
- 下载官方.env example
```
wget -O .env https://github.com/immich-app/immich/releases/latest/download/example.env
```

官方docker-compose.yml/.env可直接使用，也可根据自身需要修改。
以下步骤无需修改docker-compose.yml/.env

## 使用Container Manager启动Immich

### 新增项目
自定项目名称，选择immich目录（下载docker-compose.yml的目录），使用现有docker-compose.yml新建项目，
<img src="/blog/assets/20240328105019.png" />

### 自动识别yml文件
<img src="/blog/assets/20240328104944.png" />
下一步

### 启动项目
<img src="/blog/assets/20240328105244.png" />

项目启动中

<img src="/blog/assets/20240328105439.png" />
等待时长视自身网络情况而定

---

## 访问Immich
- ip:port
<img src="/blog/assets/20240328111334.png" />
![[Pasted image 20240328111334.png]]
- 注册
<img src="/blog/assets/20240328111417.png" />
完成后登录，玩儿去吧