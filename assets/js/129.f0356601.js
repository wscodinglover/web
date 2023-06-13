(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{402:function(t,s,a){"use strict";a.r(s);var r=a(14),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"semver-备忘清单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#semver-备忘清单"}},[t._v("#")]),t._v(" Semver 备忘清单")]),t._v(" "),s("p",[t._v("这个 semver 语义化版本快速参考备忘清单。")]),t._v(" "),s("h2",{attrs:{id:"语义化版本标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语义化版本标准"}},[t._v("#")]),t._v(" 语义化版本标准")]),t._v(" "),s("h3",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semver"),s("OutboundLink")],1),t._v(" 是一种语义版本控制规范。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("语义版本控制规范文档"),s("OutboundLink")],1),t._v(" "),s("em",[t._v("(semver.org)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/using-npm/semver",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 的语义版本器"),s("OutboundLink")],1),t._v(" "),s("em",[t._v("(npmjs.com)")])])]),t._v(" "),s("h3",{attrs:{id:"semver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#semver"}},[t._v("#")]),t._v(" Semver")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("-")]),t._v(" "),s("th",[t._v("-")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("主版本号(MAJOR)")])]),t._v(" "),s("td",[t._v("当你做了不兼容的 API 修改")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("次版本号(MINOR)")])]),t._v(" "),s("td",[t._v("当你做了向下兼容的功能性新增")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("修订号(PATCH)")])]),t._v(" "),s("td",[t._v("当你做了向下兼容的问题修正")])])])]),t._v(" "),s("h3",{attrs:{id:"简单范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单范围"}},[t._v("#")]),t._v(" 简单范围")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  1.2.3\n =1.2.3\n >1.2.3\n <1.2.3\n>=1.2.3\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("请注意，后缀版本（"),s("code",[t._v("1.2.3-rc1")]),t._v("）不匹配。")]),t._v(" "),s("h3",{attrs:{id:"范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范围"}},[t._v("#")]),t._v(" 范围")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("范围")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("~1.2.3")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=1.2.3 <1.3.0")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("^1.2.3")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=1.2.3 <2.0.0")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("^0.2.3")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=0.2.3 <0.3.0")])]),t._v(" "),s("td",[t._v("(0.x.x 是特殊的)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("^0.0.1")])]),t._v(" "),s("td",[t._v("是  "),s("code",[t._v("=0.0.1")])]),t._v(" "),s("td",[t._v("(0.0.x 是特殊的)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("^1.2")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=1.2.0 <2.0.0")])]),t._v(" "),s("td",[t._v("(像 ^1.2.0)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("~1.2")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=1.2.0 <1.3.0")])]),t._v(" "),s("td",[t._v("(像 ~1.2.0)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("^1")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=1.0.0 <2.0.0")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("~1")])]),t._v(" "),s("td",[t._v("相同的")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("1.x")])]),t._v(" "),s("td",[t._v("相同的")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("1.*")])]),t._v(" "),s("td",[t._v("相同的")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("1")])]),t._v(" "),s("td",[t._v("相同的")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("任何版本")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("x")])]),t._v(" "),s("td",[t._v("相同的")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"连字符范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连字符范围"}},[t._v("#")]),t._v(" 连字符范围")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("范围")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("1.2.3 - 2.3.4")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=1.2.3 <=2.3.4")])])])])]),t._v(" "),s("h4",{attrs:{id:"部分向右"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分向右"}},[t._v("#")]),t._v(" 部分向右")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("范围")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("1.2.3 - 2.3")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=1.2.3 <2.4.0")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("1.2.3 - 2")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v(">=1.2.3 <3.0.0")])])])])]),t._v(" "),s("h4",{attrs:{id:"部分向左"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分向左"}},[t._v("#")]),t._v(" 部分向左")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("范围")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("1.2 - 2.3.0")])]),t._v(" "),s("td",[t._v("是 "),s("code",[t._v("1.2.0 - 2.3.0")])])])])]),t._v(" "),s("p",[t._v("当右侧为部分（例如，"),s("code",[t._v("2.3")]),t._v("）时，假定缺失的部分为"),s("code",[t._v("x")]),t._v("（例如，"),s("code",[t._v("2.3.x")]),t._v("）。")]),t._v(" "),s("p",[t._v("如果左边是部分的（例如，"),s("code",[t._v("1.2")]),t._v("），则假定缺少的部分为"),s("code",[t._v("0")]),t._v("（例如，"),s("code",[t._v("1.2.0")]),t._v("）。")]),t._v(" "),s("h3",{attrs:{id:"有效的语义版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有效的语义版本"}},[t._v("#")]),t._v(" 有效的语义版本")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.20")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".30")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prerelease"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("meta\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("meta\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("valid\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("beta\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beta\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("valid\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0valid\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("somethinglong"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("aef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("its"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("okay\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("beta\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.2")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SNAPSHOT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SNAPSHOT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".7")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1848")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1227")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alpha"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("beta\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RC")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SNAPSHOT")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".12")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".9")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".12")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("788")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".12")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".9")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".12")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("meta\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RC")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SNAPSHOT")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".12")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".9")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".12")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("10000aaa"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("kk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99999999999999999999999.999999999999999999")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".99999999999999999")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("0A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("legal\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br")])]),s("h3",{attrs:{id:"组合范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组合范围"}},[t._v("#")]),t._v(" 组合范围")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("范围")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v(">=0.14 <16")])]),t._v(" "),s("td",[t._v("和 (空格分隔)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("0.14.x \\|\\| 15.x.x")])]),t._v(" "),s("td",[t._v("或 (双竖线分隔)")])])])]),t._v(" "),s("h3",{attrs:{id:"解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[t._v("#")]),t._v(" 解释")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("范围")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("^")])]),t._v(" "),s("td",[t._v("意思是“兼容”")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("~")])]),t._v(" "),s("td",[t._v("意思是“相当接近”")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("0.x.x")])]),t._v(" "),s("td",[t._v("用于“初始开发”")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("1.x.x")])]),t._v(" "),s("td",[t._v("表示定义了公共 API")])])])]),t._v(" "),s("h3",{attrs:{id:"预发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预发布"}},[t._v("#")]),t._v(" 预发布")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1.2.3-prerelease+build\n1.1.2-prerelease+meta\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"另见"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#另见"}},[t._v("#")]),t._v(" 另见")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://regex101.com/r/vkijKf/1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("语义化版本号验证正则表达式，支持按编号提取的语言"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://regex101.com/r/Ly7O1x/3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("语义化版本号验证正则表达式，支持按组名称提取的语言"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);