(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{405:function(t,e,a){"use strict";a.r(e);var s=a(21),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"页面生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面生成"}},[t._v("#")]),t._v(" 页面生成")]),t._v(" "),a("p",[t._v("得益于 Vize 的统一 "),a("RouterLink",{attrs:{to:"/advanced/dsl.html"}},[t._v("DSL")]),t._v(" 架构，开发者可以自定义 generator 来生成不同的产物（如生成小程序等）。")],1),t._v(" "),a("p",[t._v("Vize 内置 "),a("a",{attrs:{href:"https://github.com/vize-team/vize/tree/master/packages/generator-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("generator-web"),a("OutboundLink")],1),t._v(" 作为默认的 generator，用来生成普通 Web 页面。")]),t._v(" "),a("h2",{attrs:{id:"_1-自定义-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-自定义-generator"}},[t._v("#")]),t._v(" 1. 自定义 Generator")]),t._v(" "),a("p",[t._v("若要定制 generator，参考："),a("a",{attrs:{href:"https://github.com/vize-team/vize/tree/master/packages/generator-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("generator-web"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_2-导入-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入-generator"}},[t._v("#")]),t._v(" 2. 导入 Generator")]),t._v(" "),a("p",[t._v("修改服务项目目录下的 "),a("code",[t._v("src/config.ts")]),t._v("，在 "),a("code",[t._v("config")]),t._v(" 内新增 "),a("strong",[a("code",[t._v("generators")])]),t._v(" 字段：")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" myGenerator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path-to-my-generator'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  generators"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    myGenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("然后就可以在"),a("strong",[t._v("创建页面")]),t._v("时选择使用 "),a("code",[t._v("myGenerator")]),t._v("。")])])}),[],!1,null,null,null);e.default=r.exports}}]);