(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{342:function(t,s,i){"use strict";i.r(s);var a=i(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"安装软件并建立开发工程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安装软件并建立开发工程"}},[t._v("#")]),t._v(" 安装软件并建立开发工程")]),t._v(" "),i("blockquote",[i("p",[t._v("注意：安装软件已经存在网盘的 java 文件夹中。因为家里的电脑是 win732 位，所以软件也全是 32 位的。")])]),t._v(" "),i("p",[t._v("搭建开发环境，主要包括 jdk/maven/eclipse/git/MySQL,并建立开发工程；")]),t._v(" "),i("ul",[i("li",[t._v("安装 32 位 jdk 和 mysql：直接跟着书本进行安装（《java 程序开发大全》）")]),t._v(" "),i("li",[t._v("安装 maven：根据https://www.cnblogs.com/chanchifeng/p/6195149.html的案件教程进行安装即可。")]),t._v(" "),i("li",[t._v("安装 git，并注册 git 账号：https://gitee.com/help (user:874682009@qq.com pwd:houguiyu321)")]),t._v(" "),i("li",[t._v("Eclipse 是免安装版本，所以不需要进行安装，直接打开就可以了；")])]),t._v(" "),i("h5",{attrs:{id:"接下来，就是如何创建第一个开发工程的步骤："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#接下来，就是如何创建第一个开发工程的步骤："}},[t._v("#")]),t._v(" 接下来，就是如何创建第一个开发工程的步骤：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("登录“码云”，点击“创建仓库”；")]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/001.png",width:"60%"}})])]),t._v(" "),i("li",[i("p",[t._v("录入“仓库名称”、是否开源选择“公开”，点击“创建”即可；")]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/002.png",width:"60%"}})])]),t._v(" "),i("li",[i("p",[t._v("把创建的项目的 url 给 copy 下来；\n")]),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/003.png",width:"60%"}})]),i("p")])]),t._v(" "),i("h5",{attrs:{id:"打开-eclipse，import-进刚刚在-git-上创建的项目。"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#打开-eclipse，import-进刚刚在-git-上创建的项目。"}},[t._v("#")]),t._v(" 打开 eclipse，import 进刚刚在 git 上创建的项目。")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("操作：file-import-git-projects from git-next-clone url-next")]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/004.png",width:"60%"}})])]),t._v(" "),i("li",[i("p",[t._v("把之前 copy 的 url 给 paste 到下图的红框中，首次使用的时候要录入用户名和密码，勾上：store in secure store，点击“next”；")]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/005.png",width:"60%"}})])]),t._v(" "),i("li",[i("p",[t._v("操作：next-next-next，到了下图，选择第三个选项，继续 next，最后 finish 就 OK 了，项目就导进 eclipse 中了。\n")]),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/006.png",width:"60%"}})]),i("p")])]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/007.png",width:"60%"}})]),t._v(" "),i("p",[t._v("在 pom 文件中添加依赖包；（以添加数据库包为例）"),i("br"),t._v("\n进入网站：https://mvnrepository.com/，在站内搜索：mysql（因为我的电脑安装的是mysql）")]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/008.png",width:"60%"}})]),t._v(" "),i("p",[t._v("选择第一个进入，选择一个版本进入：")]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/009.png",width:"60%"}})]),t._v(" "),i("p",[t._v("Copy 下面的这段话 paste 到 pom.xml 里面；")]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/010.png",width:"60%"}})]),t._v(" "),i("p",[t._v("修改之后，把项目先转化为 maven 项目：右击项目，选择 configure-convert to maven project；\n项目转化为 maven 项目之后，更新 maven，依赖包才会真正生产：右击项目，点击 maven-update project，")]),t._v(" "),i("p",{staticClass:"show-images"},[i("img",{attrs:{src:"/firstlearn/dubbo/012.png",width:"60%"}})]),t._v(" "),i("p",[t._v("上传项目：右击项目-team-commit-ignore 那些不要的文件，填写 message，点击 commit and push。")])])}],!1,null,null,null);s.default=e.exports}}]);