(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{237:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("v4.3.0")]),s._v("之前本项目都是基于"),e("code",[s._v("node-sass")]),s._v("进行构建的，但"),e("code",[s._v("node-sass")]),s._v("底层依赖 "),e("a",{attrs:{href:"https://github.com/sass/libsass",target:"_blank",rel:"noopener noreferrer"}},[s._v("libsass"),e("OutboundLink")],1),s._v("，导致很多用户安装的特别的困难，尤其是 windows 用户，它强制用户在"),e("code",[s._v("windows")]),s._v("环境中必须安装"),e("code",[s._v("python2")]),s._v("和"),e("code",[s._v("Visual Studio")]),s._v("才能编译成功。")]),s._v(" "),e("p",[s._v("所以为了解决这个问题，本项目在 "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/3040",target:"_blank",rel:"noopener noreferrer"}},[s._v("v4.3.0"),e("OutboundLink")],1),s._v("修改为"),e("code",[s._v("dart-sass")]),s._v("进行构建，它能在保证性能的前提下大大简化用户的安装成本。通过这个 "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),e("OutboundLink")],1),s._v("下面相关的评论就可以知道，安装 "),e("code",[s._v("node-sass")]),s._v(" 是多么麻烦的一件事。")]),s._v(" "),e("p",[s._v("这里选择使用"),e("code",[s._v("dart-sass")]),s._v("还有一个更主要的原因，"),e("code",[s._v("sass")]),s._v("官方已经将"),e("code",[s._v("dart-sass")]),s._v("作为未来主要的的开发方向了，有任何新功能它都是会优先支持的，而且它已经在社区里稳定运行了很长的一段时间，基本没有什么坑了。"),e("code",[s._v("dart-sass")]),s._v("之所以容易安装，主要是因为它会被编译成纯 js，这样就可以直接在的 node 环境中使用。虽然这样它的运行速度会比基于 "),e("a",{attrs:{href:"https://github.com/sass/libsass",target:"_blank",rel:"noopener noreferrer"}},[s._v("libsass"),e("OutboundLink")],1),s._v("的慢一些些，但这些速度的差异几乎可以忽略不计。整个社区现在都在拥抱"),e("code",[s._v("dart-sass")]),s._v("，我们没有理由拒绝！而且它的确大大简化了用户的安装成本。")]),s._v(" "),e("p",[s._v("目前"),e("code",[s._v("vue-cli")]),s._v("在选择"),e("code",[s._v("sass")]),s._v("预处理的时候也会默认优先使用"),e("code",[s._v("dart-scss")]),s._v("，相关 "),e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/pull/3321",target:"_blank",rel:"noopener noreferrer"}},[s._v("pr"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("相关的说明可以见该篇文章： "),e("a",{attrs:{href:"https://sass-lang.com/blog/announcing-dart-sass",target:"_blank",rel:"noopener noreferrer"}},[s._v("Announcing Dart Sass"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("具体 "),e("code",[s._v("dart-sass")]),s._v("性能评测可见："),e("a",{attrs:{href:"https://github.com/sass/dart-sass/blob/master/perf.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("Perf Report"),e("OutboundLink")],1)]),s._v(" "),s._m(1),s._v(" "),e("p",[s._v("升级也非常的简单，只需要两个步骤")]),s._v(" "),s._m(2),e("p",[s._v("具体可见该： "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/3040",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pull Request"),e("OutboundLink")],1)]),s._v(" "),s._m(3),s._v(" "),e("p",[s._v("替换 "),e("code",[s._v("node-sass")]),s._v(" 之后有一个地方需要注意，就是它不再支持之前 "),e("code",[s._v("sass")]),s._v(" 的那种 "),e("code",[s._v("/deep/")]),s._v(" 写法，需要统一改为 "),e("code",[s._v("::v-deep")]),s._v(" 的写法。相关： "),e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/3399",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("具体 demo：")]),s._v(" "),s._m(4),e("p",[s._v("不管你是否使用"),e("code",[s._v("dart-sass")]),s._v("，我都是建议你使用"),e("code",[s._v("::v-deep")]),s._v("的写法，它不仅兼容了 css 的"),e("code",[s._v(">>>")]),s._v("写法，还兼容了 sass "),e("code",[s._v("/deep/")]),s._v("的写法。而且它还是 "),e("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/scoped-styles-changes/active-rfcs/0023-scoped-styles-changes.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue 3.0 RFC"),e("OutboundLink")],1),s._v(" 中指定的写法。")]),s._v(" "),s._m(5),s._v(" "),e("p",[s._v("更多： "),e("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B7%E7%94%A8%E6%9C%AC%E5%9C%B0%E5%92%8C%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[s._v("scope css 写法"),e("OutboundLink")],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"node-sass-to-dart-sass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-sass-to-dart-sass"}},[this._v("#")]),this._v(" Node Sass to Dart Sass")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"升级方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级方案"}},[this._v("#")]),this._v(" 升级方案")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" uninstall node-sass\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" sass -S -D\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"不兼容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不兼容"}},[this._v("#")]),this._v(" 不兼容")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".a")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("/deep/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".b")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 修改为 */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".a")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("::v-deep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".b")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("而且原本 "),t("code",[this._v("/deep/")]),this._v(" 的写法也本身就被 Chrome 所废弃，你现在经常能在控制台中发现 Chrome 提示你不要使用"),t("code",[this._v("/deep/")]),this._v("的警告。")])}],!1,null,null,null);t.default=n.exports}}]);