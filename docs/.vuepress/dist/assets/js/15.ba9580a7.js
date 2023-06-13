(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{288:function(a,s,e){"use strict";e.r(s);var t=e(14),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"conan-备忘清单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conan-备忘清单"}},[a._v("#")]),a._v(" Conan 备忘清单")]),a._v(" "),s("p",[a._v("这个 "),s("a",{attrs:{href:"https://conan.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Conan"),s("OutboundLink")],1),a._v(" 快速参考备忘清单显示了它的常用命令使用清单")]),a._v(" "),s("h2",{attrs:{id:"入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[a._v("#")]),a._v(" 入门")]),a._v(" "),s("h3",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[a._v("Conan 是开源、去中心化和多平台的软件包，管理器来创建和共享您的所有本机二进制文件")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://conan.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Conan 官网"),s("OutboundLink")],1)])]),a._v(" "),s("h4",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" conan\n$ pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" conan "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--upgrade")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("初始化配置文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan config init\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"显示本地客户端配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示本地客户端配置"}},[a._v("#")]),a._v(" 显示本地客户端配置")]),a._v(" "),s("p",[a._v("Conan 应用配置")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看 Conan 主目录")]),a._v("\n$ conan config home\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示部分或全部配置项")]),a._v("\n$ conan config get "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("section"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示完整的 conan.conf 文件")]),a._v("\n$ conan config get\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在“日志”部分显示“级别”项")]),a._v("\n$ conan config get log.level\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("配置文件的内容（例如默认值）")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan profile show default\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("远程存储库")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan remote list\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"添加和修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加和修改配置"}},[a._v("#")]),a._v(" 添加和修改配置")]),a._v(" "),s("p",[a._v("安装配置集合")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan config "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ conan config "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ./my_config.conf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("更改单个配置值")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("general.revisions_enabled")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),a._v(" "),s("p",[a._v("添加遥控器")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan remote "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" my_remote "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("提供远程凭据")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan user "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" my_remote "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),a._v(" "),s("h3",{attrs:{id:"显示来自-inspect-或-reference-的信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示来自-inspect-或-reference-的信息"}},[a._v("#")]),a._v(" 显示来自 inspect 或 reference 的信息")]),a._v(" "),s("p",[a._v("显示 "),s("code",[a._v("conanfile.py")]),a._v(" 的属性")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan inspect "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("attribute"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("显示 "),s("code",[a._v("conanfile.py")]),a._v(" 的内容以供参考")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan get "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("reference"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("显示 "),s("code",[a._v("recipe")]),a._v(" 的依赖关系图信息")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan info "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path_or_reference"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"搜索包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索包"}},[a._v("#")]),a._v(" 搜索包")]),a._v(" "),s("p",[a._v("在远程搜索包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出本地缓存中的包名称")]),a._v("\n$ conan search \n$ conan search "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("revision"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出取决于给出了多少包引用。")]),a._v("\n                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 支持通配符")]),a._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("--table"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("file.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将输出保存在 HTML 文件中")]),a._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-r"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看远程存储库（默认为本地缓存）")]),a._v("\n\n$ conan search mylib/1.0@user/channel     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示本地缓存中 mylib/1.0@user/channel 的所有包")]),a._v("\n$ conan search "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zlib/*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("all            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在所有远程中显示所有版本的 zlib")]),a._v("\n\n$ conan search zlib "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" conan-center\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示包的修订：")]),a._v("\n$ conan search "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("revision"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--revisions")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("h3",{attrs:{id:"安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装包"}},[a._v("#")]),a._v(" 安装包")]),a._v(" "),s("p",[a._v("仅使用参考安装包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_reference"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("从 conanfile 安装软件包列表")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" conanfile.txt\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("requires"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nzlib/1.2.11\n$ conan "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path_to_conanfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("通过生成器在构建系统中使用包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" conanfile.txt\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("requires"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nzlib/1.2.11\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("generators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ncmake_find_package\nmsbuild\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("安装需求并生成文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\n$ conan "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("运行您的构建系统（以下之一）")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ cmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" cmake "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--build")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n$ msbuild myproject.sln\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"创建一个包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个包"}},[a._v("#")]),a._v(" 创建一个包")]),a._v(" "),s("p",[a._v("从模板创建配方 (conanfile.py)")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan new "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("reference"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("只需将配方导出到本地缓存")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path_to_conanfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("从 recipe 为一种配置创建包\n也隐含地安装和导出步骤")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan create "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"检查包裹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查包裹"}},[a._v("#")]),a._v(" 检查包裹")]),a._v(" "),s("p",[a._v("完整打印包装配方：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan get "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("revision"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ conan get boost/1.74.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),a._v(" "),s("p",[a._v("包装配方的打印属性：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan inspect "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("revision"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ conan inspect boost/1.74.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),a._v(" "),s("p",[a._v("请参阅 "),s("a",{attrs:{href:"https://docs.conan.io/en/latest/reference/commands/consumer/get.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("conan get"),s("OutboundLink")],1),a._v(" 和 "),s("a",{attrs:{href:"https://docs.conan.io/en/latest/reference/commands/misc/inspect.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("conan inspect"),s("OutboundLink")],1),a._v(" 参考")]),a._v(" "),s("h3",{attrs:{id:"lockfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lockfiles"}},[a._v("#")]),a._v(" Lockfiles")]),a._v(" "),s("p",[a._v("创建一个锁文件：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan lock create "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/conanfile.py "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--channel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("conan create")]),a._v(" 或 "),s("code",[a._v("conan install")]),a._v(" 期间使用 lockfile：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ conan "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("command"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--lockfile")]),a._v(" conan.lock\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("查看 "),s("a",{attrs:{href:"https://docs.conan.io/en/latest/reference/commands/misc/lock.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("conan lock"),s("OutboundLink")],1),a._v(" 参考")])])}),[],!1,null,null,null);s.default=n.exports}}]);