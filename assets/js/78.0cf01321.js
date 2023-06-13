(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{349:function(s,a,e){"use strict";e.r(a);var t=e(14),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pm2-备忘清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-备忘清单"}},[s._v("#")]),s._v(" PM2 备忘清单")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://npmjs.org/package/pm2",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/pm2.svg?style=flat",alt:"NPM version"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/pm2",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/pm2.svg?style=flat",alt:"Downloads"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://github.com/Unitech/pm2/network/dependents",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/github/dependents-repo/Unitech/pm2",alt:"Repo Dependents"}}),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/badge/icon/Github?icon=github&label",alt:"Github repo"}}),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PM2"),a("OutboundLink")],1),s._v(" 是一个守护进程管理器，它将帮助您管理和保持您的应用程序在线。PM2 入门非常简单，它以简单直观的 CLI 形式提供\n")]),s._v(" "),a("h2",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[s._v("#")]),s._v(" 入门")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("最新的 PM2 版本可通过 NPM 或 Yarn 安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2@latest "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" pm2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动应用程序"}},[s._v("#")]),s._v(" 启动应用程序")]),s._v(" "),a("p",[s._v("启动、守护进程和监视应用程序的最简单方法是使用此命令行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 start app.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者轻松启动任何其他应用程序")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 start bashscript.sh\n$ pm2 start python-app.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v("\n$ pm2 start binary-file -- "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1520")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"您可以传递给-cli-的一些选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#您可以传递给-cli-的一些选项"}},[s._v("#")]),s._v(" 您可以传递给 CLI 的一些选项")]),s._v(" "),a("p",[s._v("指定应用名称")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("文件更改时监视并重新启动应用程序")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置应用重新加载的内存阈值")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("--max-memory-restart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("200MB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定日志文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--log")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("log_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将额外的参数传递给脚本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-- arg1 arg2 arg3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("自动重启之间的延迟")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("--restart-delay "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("delay "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" ms"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("带时间的前缀日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--time")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("不要自动重启应用程序")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("--no-autorestart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定 cron 强制重启")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cron")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("cron_pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("附加到应用程序日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("--no-daemon\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"管理流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理流程"}},[s._v("#")]),s._v(" 管理流程")]),s._v(" "),a("p",[s._v("管理应用程序状态很简单，这里是命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 restart app_name\n$ pm2 reload app_name\n$ pm2 stop app_name\n$ pm2 delete app_name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"你可以传递而不是-app-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你可以传递而不是-app-name"}},[s._v("#")]),s._v(" 你可以传递而不是 app_name")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("all")]),s._v(" 作用于所有进程")]),s._v(" "),a("li",[a("code",[s._v("id")]),s._v(" 作用于特定的进程 ID")])]),s._v(" "),a("h3",{attrs:{id:"检查状态、日志、指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查状态、日志、指标"}},[s._v("#")]),s._v(" 检查状态、日志、指标")]),s._v(" "),a("p",[s._v("现在您已经启动了这个应用程序，您可以检查它的状态、日志、指标，甚至可以使用 "),a("a",{attrs:{href:"https://pm2.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2.io"),a("OutboundLink")],1),s._v(" 获取在线仪表板")]),s._v(" "),a("p",[s._v("列出PM2管理的所有应用的状态")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("实时显示日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 logs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("挖掘旧日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lines")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这是一个直接适合您的终端的实时仪表板")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 monit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("基于 Web 的仪表板，具有诊断系统的跨服务器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 plus\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"集群模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群模式"}},[s._v("#")]),s._v(" 集群模式")]),s._v(" "),a("p",[s._v("对于 Node.js 应用程序，PM2 包括一个自动负载均衡器，它将在每个衍生进程之间共享所有 HTTP[s]/Websocket/TCP/UDP 连接")]),s._v(" "),a("p",[s._v("以集群模式启动应用程序")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 start app.js "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" max\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 "),a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),a("OutboundLink")],1),s._v(" 阅读有关集群模式的更多信息")]),s._v(" "),a("h3",{attrs:{id:"生态系统文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生态系统文件"}},[s._v("#")]),s._v(" 生态系统文件")]),s._v(" "),a("p",[s._v("您还可以创建一个称为生态系统文件的配置文件来管理多个应用程序。生成生态系统文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 ecosystem\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这将生成一个 "),a("code",[s._v("ecosystem.config.js")]),s._v(" 文件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("apps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"development"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("env_production")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'worker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'worker.js'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("并轻松启动")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 start ecosystem.config.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 "),a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/application-declaration/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),a("OutboundLink")],1),s._v(" 阅读有关应用程序声明的更多信息")]),s._v(" "),a("h3",{attrs:{id:"设置启动脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置启动脚本"}},[s._v("#")]),s._v(" 设置启动脚本")]),s._v(" "),a("p",[s._v("使用您在服务器启动/重新启动时管理的进程重新启动 PM2 至关重要。为了解决这个问题，只需运行这个命令来生成一个活动的启动脚本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 "),a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/startup/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),a("OutboundLink")],1),s._v(" 阅读有关启动脚本生成器的更多信息")]),s._v(" "),a("h3",{attrs:{id:"重新启动应用程序更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新启动应用程序更改"}},[s._v("#")]),s._v(" 重新启动应用程序更改")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("--watch")]),s._v(" 选项非常简单")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /path/to/my/app\n$ pm2 start env.js "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--watch")]),s._v(" --ignore-watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这将在当前目录 "),a("code",[s._v("+")]),s._v(" 所有子文件夹中的任何文件更改时监视并重新启动应用程序，并且它将忽略 "),a("code",[s._v("node_modules")]),s._v(" 文件夹中的任何更改 "),a("code",[s._v('--ignore-watch="node_modules"')]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ pm2 logs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后，您可以使用上面命令来检查重新启动的应用程序日志。")]),s._v(" "),a("h2",{attrs:{id:"pm2-cheatsheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-cheatsheet"}},[s._v("#")]),s._v(" PM2 CheatSheet")]),s._v(" "),a("p",[s._v("以下是一些值得了解的命令。 只需使用示例应用程序或开发机器上当前的 Web 应用程序来尝试它们")]),s._v(" "),a("h3",{attrs:{id:"pm2-分叉模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-分叉模式"}},[s._v("#")]),s._v(" PM2 分叉模式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 start app.js "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" my-api "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 名称进程")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"pm2-集群模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-集群模式"}},[s._v("#")]),s._v(" PM2 集群模式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 start app.js "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将根据可用的 CPU 使用 LB 启动最大进程")]),s._v("\n$ pm2 start app.js "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" max   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与上面相同，但已弃用。")]),s._v("\n$ pm2 scale app +3          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 `app` 增加 3 名工人")]),s._v("\n$ pm2 scale app "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 `app` 向上或向下扩展到总共 2 个工人")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"pm2-清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-清单"}},[s._v("#")]),s._v(" PM2 清单")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 list        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有进程状态")]),s._v("\n$ pm2 jlist       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以原始 JSON 格式打印进程列表")]),s._v("\n$ pm2 prettylist  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以美化JSON打印进程列表")]),s._v("\n$ pm2 describe "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示有关特定进程的所有信息")]),s._v("\n$ pm2 monit       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监控所有进程")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"pm2-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-日志"}},[s._v("#")]),s._v(" PM2 日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在流中显示所有进程日志")]),s._v("\n$ pm2 flush         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清空所有日志文件")]),s._v("\n$ pm2 reloadLogs    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载所有日志")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"pm2-动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-动作"}},[s._v("#")]),s._v(" PM2 动作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 stop all     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止所有进程")]),s._v("\n$ pm2 restart all  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启所有进程")]),s._v("\n$ pm2 reload all   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 0s 停机时间重新加载（对于 NETWORKED 应用程序）")]),s._v("\n$ pm2 stop "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止特定进程 ID")]),s._v("\n$ pm2 restart "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启特定进程id")]),s._v("\n$ pm2 delete "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将从 pm2 列表中删除进程")]),s._v("\n$ pm2 delete all   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将从 pm2 列表中删除所有进程")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"pm2-杂项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-杂项"}},[s._v("#")]),s._v(" PM2 杂项")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置元数据（重启时间...）")]),s._v("\n$ pm2 updatePM2          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新内存 pm2")]),s._v("\n$ pm2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保 pm2 守护进程已经启动")]),s._v("\n$ pm2 sendSignal SIGUSR2 my-app "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向脚本发送系统信号")]),s._v("\n$ pm2 start app.js --no-daemon\n$ pm2 start app.js --no-vizion\n$ pm2 start app.js --no-autorestart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"更新-pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新-pm2"}},[s._v("#")]),s._v(" 更新 PM2")]),s._v(" "),a("p",[s._v("我们让它变得简单，版本之间没有重大变化，过程很简单")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2@latest "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后更新内存中的PM2")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"另见"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#另见"}},[s._v("#")]),s._v(" 另见")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("QUICK START"),a("OutboundLink")],1),s._v(" "),a("em",[s._v("(pm2.keymetrics.io)")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);