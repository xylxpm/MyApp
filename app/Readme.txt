仿mooc和iread两个app，先从ui，文件结构开始，找到合适的组件


baseomponents 基础组件（按钮，字体图标之类）
components  组件（本项目用的）
pages  页面
utils  工具 （格式化字符串之类的基础工具）


1、下拉、上拉刷新（已经找到可以用的组件）  get
1.1、列表刷新加载数据，状态控制   get一半
2、列表（内容可以左右划出对应按钮） get
3、时间轴
4、列表吸顶   android并不支持SectionList的吸顶效果  get一半
5、使用RN+redux（实现模拟登陆和退出。没有登陆的时候，点击和用户有关的按钮，都弹出登陆界面）  get
6、网络状态判断
7、启动页
8、打开app，判断登陆状态
9、网络请求   get一半


******************************
node_modules/react-native/Libraries/Lists/SectionList.js
node_modules/react-native/Libraries/Lists/VirtualizedSectionList.js

这两个文件修改过，原始文件放在RN_projects----edited-code文件夹