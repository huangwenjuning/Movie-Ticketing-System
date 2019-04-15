# Movie-Ticketing-System
vue+node+mongodb+stylus
### 项目启动
npm install
npm run dev

## Update Log

### 2019-04-10更新
    新项目建立
    Vue-cli项目搭建
    项目基本配置
    

    更新预告：
        node前后端分离配置
        冗余文件剥离
        iconfont文件引入
        接口文档编写

### 2019-04-12更新
    终于请好假了，可以专心的完成毕业设计。
    今天打算画完电影APP的原型交互图。
    产品之器：https://zhuanlan.zhihu.com/p/21386019
    产品的每一个阶段都要解决大量问题。需求分析阶段，我们搞清楚了为什么要做这个需求。下一个阶段就是把想法变成让用户（包括老板）实际可体验的东西，即产品原型。产品原型并不是直接上手 Sketch，画完给老板看。我的最佳实践是产品原型有三个子阶段：
        1、纸上原型。你需要在桌面上，摊开一张纸，用一支笔，去构思你的产品。这里输出的线框图是给自己的，所以你尽情挥洒，只要自己看得懂就行；
        2、静态原型。有了纸上原型，这个产品的雏形已经在你心中，现在，打开 Sketch把产品的「最终形态」画出来，不要太在意用色，不必面面俱到。这个阶段配合Sketch Mirror，可以边画边给其他人看，听取其他人的反馈；
        3、动态原型。动态原型工具太多，我也基本都尝试过，最终选择了 Craft，这个还在内测中的工具。动态原型并不是必须的，但是动态原型更接近实际产品体验，为什么不再进一步呢。
    看完文章之后，首先要思考的就是如何将该电影APP做的更有亮点，市面上已有了很多成熟的app。打开各类app，各种信息纷杂，已经不再是单一的在线购票功能了。因此，对于越来越追求简洁和快速的我们，我将开发一款更加简洁，功能单一的在线售票影院，让人们关注点只在电影方面。

	作为非专业人员想要用工具快速的画出原型图有点为难，因此选择了ProcessOn来完成基本的原型图。（有参考淘票票、猫眼电影等成熟app的界面。）

### 2019-04-13更新
	因为一直没有写过node相关的项目，今天开始摸索node+vue项目是如何构建的。
	node相关配置 - express框架运行环境
	- 安装express npm install express --save
		遇到的问题：在安装完express后就直接通过命令行express server生成server文件夹，结果一直报错express command not found。
		解决方法：在安装一个包npm install -g express-generator
	    原因：express3+已经把创建一个APP的功能分离出来为express-generator，没它创建不了应用程序
	- 安装express generator生成器  npm install -g express-generator
	- 通过生成器自动创建项目 express server
	- cd server
	- npm install 下载完成后可npm start启动服务。默认端口号是3000.(访问localhost:3000,成功启动了服务，开心^_^)

	mongoDB的安装和环境搭建 （注意需要在MongoDB所在根目录下手动创建data文件夹和db文件夹 /data/db）
	配置环境变量(以免每次都sudo) mac配置环境变量方法： 因为我是第一次配置，所以需要先创建一个配置文件。
	1. 打开 应用程序 -> 实用工具 -> 终端； 
	2. 在终端中定位到自己用户的主目录，输入： cd ~ ； 
	3. 创建一个空文件，输入：touch .bash_profile ； 
	4. 编辑这个文件，输入：open .bash_profile ； 
	5. 在这个文件中输入：export PATH=${PATH}:<文件目录> ；（将"<文件目录>"替换成自己想要的目录）
		例如：export PATH=${PATH}:/Users/skythinking/MongoDB/mongodb-osx-x86_64-2.6.1/bin; 
	6. 如果需要添加其他的环境变量例如JAVA_HOME，可以输入：export JAVA_HOME=/Library/Java/Home ； 
	7. source .bash_profile重启终端，测试,这个时候就可以在用户主目录使用：mongod --dbpath /Users/skythinking/MongoDB/data/db 来启动数据库了，点击终端Commond+N打开一个新的终端，使用mongo命令来连接数据库，对数据库进行操作,比如：show dbs 显示所有的集合
	原文：https://blog.csdn.net/yusirxiaer/article/details/79275171 

	全局变量按上述方法未设置成功，后续再解决。

	MongoDB的开启：
		在bin目录下分别执行 
			- sudo ./mongod
			- sudo ./mongo

		mongod 是用来连接到mongodb数据库服务器的，即服务器端。
		mongo 是用来启动MongoDB shell的，是mongodb的命令行客户端。
	进行配置：
		创建文件mongod_conf:
			port=27017
			dbpath=/Users/mongodb/data/
			logpath=/Users/mongodb/log/mongodb.log  
			fork = true
		在bin目录下执行sudo ./mongod -f mongodb.conf
	
	新接触了一个东西，pm2是一个内置负载均衡的node.js应用进程管理器
	安装方法： npm install -g pm2
	pm2 start xxx

	安装mongoose
	创建model
	创建路由

	花花说，他以前很不快乐，后来，他尽量让自己不要不快乐。
### 2019-04-14更新
	补：
		昨天做到太晚，依然没有解决当前碰到的问题。server添加路由无法访问，报错显示Not Found一直没有查到原因，后来MongoDB又启动失败，感觉孤军作战真的需要勇气和毅力。
		好了，又是满满的一天，继续干。

	node服务依然有bug

	今天打算先把前端项目框架完善好
	主色调选择为： #ef4f4f;

	配置好了vuex

	新建了两个分支
		develop
		dev_hwj
	git branch xxx
	git checkout xxx

	暂时先用mock模拟数据

	安装配置mint-ui

	今天完成了电影卡片和影院卡片的样式，做了一个丑陋的搜索还没有调样式。
	卸载了MongoDB又下载了，在试错的路上越走越远但还是没有解决问题。
	好了，我要歇一会儿去看东野圭吾的《新参者》。


后续：
	给MongoDB创建用户
		1、创建管理员
		2、授权认证
		3、给使用的数据库添加用户

#### 2019-04-15更新
	没有网的一上午，把搜索调了一下，好像好看了一点。

	完成了电影详情的卡片样式
#### pages目录说明

film 首页
cinema  影院
recommend 推荐
mine 我的
filmDetail 电影详情页
cinemaDetail 影院详情页
pickSeat 选座

#### components 公共组件说明
CinemaCard 影院展示卡片
FilmCard 电影展示卡片
FilmDetailCard 电影详情展示卡片
HeaderContainer 头部内容 城市定位及搜索
NavBar 头部导航
ScheduleCard 放映场次展示卡片
TabBar 底部导航
Template 空白三明治

