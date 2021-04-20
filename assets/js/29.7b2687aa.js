(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{402:function(t,a,e){"use strict";e.r(a);var s=e(27),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"插件-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件-plugin"}},[t._v("#")]),t._v(" 插件（Plugin）")]),t._v(" "),e("p",[t._v("插件是页面中执行的一段逻辑，通常用作全局的功能（如环境检测、自定义上报等）。在页面加载完成后立即执行。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("⚠️ 注意")]),t._v(" "),e("p",[t._v("一个页面中，同一个插件只能被添加一次。插件本身与前端框架不耦合。")])]),t._v(" "),e("h2",{attrs:{id:"_1-创建插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建插件"}},[t._v("#")]),t._v(" 1. 创建插件")]),t._v(" "),e("p",[t._v("使用 Vize CLI 在"),e("strong",[t._v("素材库根目录下")]),t._v("运行 "),e("code",[t._v("vize create-plugin <name>")]),t._v("。"),e("br"),t._v("\n在"),e("code",[t._v("src/plugins/<name>")]),t._v("目录下创建组件。")]),t._v(" "),e("p",[t._v("插件结构如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Plugin\n├── config.js ·········· 插件配置\n├── index.js ··········· 插件逻辑\n├── preview.jpg ········ 插件预览图（可选）\n└── thumb.svg ·········· 插件 Icon\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"_2-插件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-插件配置"}},[t._v("#")]),t._v(" 2. 插件配置")]),t._v(" "),e("p",[t._v("文件名为 "),e("code",[t._v("config.ts")]),t._v("。与组件类似，插件配置包括基础信息、表单等属性。")]),t._v(" "),e("h3",{attrs:{id:"插件基础信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件基础信息"}},[t._v("#")]),t._v(" 插件基础信息")]),t._v(" "),e("p",[e("code",[t._v("info")]),t._v(" 包含以下字段：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("name")]),t._v(": 插件名")]),t._v(" "),e("li",[e("code",[t._v("desc")]),t._v(": 插件描述提示")]),t._v(" "),e("li",[e("code",[t._v("author")]),t._v(": 作者")])]),t._v(" "),e("h3",{attrs:{id:"插件表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件表单"}},[t._v("#")]),t._v(" 插件表单")]),t._v(" "),e("p",[t._v("与组件类似，插件的可配置项在编辑器中以表单的形式出现，表单数据将作为参数传入插件函数。")]),t._v(" "),e("p",[t._v("表单的配置方式与组件相同，参考："),e("RouterLink",{attrs:{to:"/dev/component.html#组件表单"}},[t._v("组件表单")]),t._v("。")],1),t._v(" "),e("p",[t._v("示例参考："),e("a",{attrs:{href:"https://github.com/vize-team/vize/blob/master/packages/materials-universal/src/plugins/Share/config.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("vize/materials-universal/plugins/Share/config.ts"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_3-插件逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-插件逻辑"}},[t._v("#")]),t._v(" 3. 插件逻辑")]),t._v(" "),e("p",[t._v("文件名为 "),e("code",[t._v("index.ts")]),t._v("。以 Function 导出。插件的逻辑，将会在页面渲染之后执行。")]),t._v(" "),e("p",[t._v("表单的数据以 "),e("code",[t._v("data")]),t._v(" 为参数名传入插件函数。")]),t._v(" "),e("p",[t._v("示例参考："),e("a",{attrs:{href:"https://github.com/vize-team/vize/blob/master/packages/materials-universal/src/plugins/Share/index.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("vize/materials-universal/plugins/Share/index.ts"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_4-icon-和预览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-icon-和预览"}},[t._v("#")]),t._v(" 4. Icon 和预览")]),t._v(" "),e("p",[t._v("配置方式与组件相同，参考："),e("RouterLink",{attrs:{to:"/dev/component.html#_4-icon-和预览"}},[t._v("组件 Icon")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"_5-更多示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-更多示例"}},[t._v("#")]),t._v(" 5. 更多示例")]),t._v(" "),e("p",[t._v("参考："),e("a",{attrs:{href:"https://github.com/vize-team/vize/blob/master/packages/materials-universal/src/plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("vize/materials-universal/plugins"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);