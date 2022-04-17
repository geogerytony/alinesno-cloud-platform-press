(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{658:function(t,_,v){"use strict";v.r(_);var e=v(0),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),v("p",[t._v("基础规则提供的是 ansible 操作的规则，对应的 ansible 脚本基线"),v("a",{attrs:{href:"https://gitee.com/alinesno-cloud/alinesno-cloud-operation-incubator",target:"_blank",rel:"noopener noreferrer"}},[t._v("打开"),v("OutboundLink")],1),t._v("，\n这里建议与"),v("code",[t._v("jenkinsfile")]),t._v("，实现自动化和流程化，环境规划并不代表所有的都需要安装，按需求处理即可。")]),t._v(" "),v("p",[t._v("比如研发中台的环境，安装 mysql/redis/docker 即可")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21)])}),[function(){var t=this.$createElement,_=this._self._c||t;return _("h1",{attrs:{id:"基础规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础规则"}},[this._v("#")]),this._v(" 基础规则")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[this._v("#")]),this._v(" 概述")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[this._v("#")]),this._v(" 规则")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("软件始终从软件库中获取")]),t._v(" "),v("li",[t._v("软件只针对"),v("code",[t._v("CentOS")]),t._v("系统，其它系统暂不考虑")]),t._v(" "),v("li",[t._v("软件放置目录"),v("code",[t._v("/opt/alinesno-soft")]),t._v("，按软件名称放置，如 tomcat ,路径为: "),v("code",[t._v("/opt/alinesno-soft/tomcat")])]),t._v(" "),v("li",[t._v("集成"),v("code",[t._v("jenkins")]),t._v("，初始化工程前缀为"),v("code",[t._v("ansible")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"软件管理规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#软件管理规范"}},[this._v("#")]),this._v(" 软件管理规范")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("统一软件管理及上传,为平台内部统一软件，开发过程只允许从统一库中获取")]),t._v(" "),v("li",[t._v("软件新版本需及更新至软件库")]),t._v(" "),v("li",[t._v("软件名称规则按:"),v("code",[t._v("软件名称")]),t._v("+"),v("code",[t._v("版本号")]),t._v("+"),v("code",[t._v("压缩格式")]),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("正例: apache-tomcat-8.5.8.tar.gz\n")])])])]),t._v(" "),v("li",[t._v("如无版本号,则按日期("),v("code",[t._v("年月日时分")]),t._v(")加后缀"),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("正例: apache-tomcat-201811130747.tar.gz\n")])])])]),t._v(" "),v("li",[t._v("软件上传之前需要做验证，确定软件可用")]),t._v(" "),v("li",[t._v("软件如需配置，需将配置文件放置于软件管理文件夹中"),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("正例: apache-maven-3.1.1.tar.gz  // 软件\n      person-settings.xml        //个人配置文件\n")])])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"linux-安装规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装规范"}},[this._v("#")]),this._v(" Linux 安装规范")])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("为了避免 Linux 上文件的乱置乱放及目录，定以下目录的规范,操作统一使用 alinesno 用户")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"目录规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录规范"}},[this._v("#")]),this._v(" 目录规范")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("是否集成")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("/home/alinesno/soft")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("/opt/jdk8")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("全局")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("/opt/alinesno/nginx")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("/opt/alinesno/redis5")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("/opt/alinesno/keepalived")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("略")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"部署环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#部署环境"}},[this._v("#")]),this._v(" 部署环境")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("基础环境完善及配置，为整个开发平台做基础，以环境搭建为主,为本地开发环境，")]),t._v(" "),v("li",[t._v("目前的服务器应该是不够的,也并不是代表所有的软件需要完善才可以进入下一步开发，比如 elk，前期搭建并一定是需要的，")]),t._v(" "),v("li",[t._v("比如说集群，也并不一定是一开始就是集群,")]),t._v(" "),v("li",[t._v("平台搭建一个人的话是比较长期，所以，以先投入组件构建为主，在完成第一步之后，再进一步完善，")]),t._v(" "),v("li",[t._v("即使在公司，也是如此建议，一步到位，也是比较难的，如果可以就更好。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"开发环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[this._v("#")]),this._v(" 开发环境")])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[this._v("MacPro_x64_16g_256g(SSD)")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"服务器资源"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器资源"}},[this._v("#")]),this._v(" 服务器资源")])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("阿里云服务器 IP 为公网")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("作用")]),t._v(" "),v("th",[t._v("服务器资源(系统/内存/硬盘)")]),t._v(" "),v("th",[t._v("IP 规划")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("开发服务器_master")]),t._v(" "),v("td",[t._v("CentOS7.x_x64_16G_40G")]),t._v(" "),v("td",[t._v("阿里云分配")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("基础 DevOps 平台")]),t._v(" "),v("td",[t._v("CentOS7.x_x64_4G_40G")]),t._v(" "),v("td",[t._v("阿里云分配")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("注册中心")]),t._v(" "),v("td",[t._v("CentOS7.x_x64_4G_40G")]),t._v(" "),v("td",[t._v("阿里云分配")]),t._v(" "),v("td",[t._v(".")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"资源规划"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#资源规划"}},[this._v("#")]),this._v(" 资源规划")])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("此处的完善进度表示文档完成进度,即可根据文档查询搭建的")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("工具")]),t._v(" "),v("th",[t._v("文档完善进度")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("基础环境")]),t._v(" "),v("td",[t._v("JDK")]),t._v(" "),v("td",[t._v("已完善")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("反向代理")]),t._v(" "),v("td",[t._v("Nginx/Kong")]),t._v(" "),v("td",[t._v("已完善")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("高可用")]),t._v(" "),v("td",[t._v("KeepAlived")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("自动部署工具")]),t._v(" "),v("td",[t._v("Jenkins")]),t._v(" "),v("td",[t._v("完善中")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",[t._v("私服库")]),t._v(" "),v("td",[t._v("Nexus")]),t._v(" "),v("td",[t._v("已完善")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",[t._v("链接跟踪")]),t._v(" "),v("td",[t._v("zipkin")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),v("td",[t._v("代码检测")]),t._v(" "),v("td",[t._v("Sonar")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),v("td",[t._v("缓存工具")]),t._v(" "),v("td",[t._v("Redis")]),t._v(" "),v("td",[t._v("已完善")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),v("td",[t._v("消息列表")]),t._v(" "),v("td",[t._v("Kafka")]),t._v(" "),v("td",[t._v("已完善")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),v("td",[t._v("分布式注册中心")]),t._v(" "),v("td",[t._v("zeekeeper")]),t._v(" "),v("td",[t._v("完善中")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),v("td",[t._v("分布式注册中心")]),t._v(" "),v("td",[t._v("DubboAdmin")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),v("td",[t._v("分布式配置中心")]),t._v(" "),v("td",[t._v("Apollo")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("换成自研配置中心")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("13")]),t._v(" "),v("td",[t._v("数据库")]),t._v(" "),v("td",[t._v("MySQL")]),t._v(" "),v("td",[t._v("已完善")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("14")]),t._v(" "),v("td",[t._v("开发过程管理")]),t._v(" "),v("td",[t._v("禅道")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),v("td",[v("s",[t._v("Redis 监控工具")])]),t._v(" "),v("td",[t._v("Redmon")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),v("td",[t._v("消息管理工具")]),t._v(" "),v("td",[t._v("Kafka-Manager")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("17")]),t._v(" "),v("td",[t._v("数据库主从")]),t._v(" "),v("td",[t._v("MyCAT")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),t._v(" "),v("td",[t._v("容器管理")]),t._v(" "),v("td",[t._v("Kubernetes")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),v("td",[t._v("镜像管理")]),t._v(" "),v("td",[t._v("Harbor")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),v("td",[t._v("自动部署")]),t._v(" "),v("td",[t._v("Ansible")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("21")]),t._v(" "),v("td",[v("s",[t._v("自动部署管理")])]),t._v(" "),v("td",[t._v("Ansible Tower")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("版权问题")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("22")]),t._v(" "),v("td",[v("s",[t._v("链接跟踪")])]),t._v(" "),v("td",[t._v("pinpoint")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("重复")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("23")]),t._v(" "),v("td",[t._v("日志监控")]),t._v(" "),v("td",[t._v("elk")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("24")]),t._v(" "),v("td",[t._v("服务器监控")]),t._v(" "),v("td",[t._v("Zabbix")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v(".")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"其它"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[this._v("#")]),this._v(" 其它")])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[this._v("略")])])}],!1,null,null,null);_.default=a.exports}}]);