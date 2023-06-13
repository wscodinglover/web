(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(t,a,e){"use strict";e.r(a);var s=e(14),l=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"android-debug-bridge-备忘清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-debug-bridge-备忘清单"}},[t._v("#")]),t._v(" Android Debug Bridge 备忘清单")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.android.com/studio/command-line/adb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADB"),a("OutboundLink")],1),t._v(" 既 Android Debug Bridge，是 Google 的 Android SDK 中的一个命令行工具，可让您的计算机控制 Android 设备执行各种设备操作。以下是您可以与 "),a("a",{attrs:{href:"https://developer.android.com/studio/command-line/adb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADB"),a("OutboundLink")],1),t._v(" 一起使用的一些最常见的命令及其用法")]),t._v(" "),a("h2",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[t._v("#")]),t._v(" 入门")]),t._v(" "),a("h3",{attrs:{id:"设备基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备基础"}},[t._v("#")]),t._v(" 设备基础")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb devices")])]),t._v(" "),a("td",[t._v("列出已连接的设备")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb devices -l")])]),t._v(" "),a("td",[t._v("列出已连接的设备和种类")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb connect [IP:PORT]")])]),t._v(" "),a("td",[t._v("连接到指定 IP 和端口的设备")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb disconnect [IP:PORT]")])]),t._v(" "),a("td",[t._v("断开指定 IP 和端口的设备连接，若未指定，则断开所有连接")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb root")])]),t._v(" "),a("td",[t._v("以 "),a("code",[t._v("root")]),t._v(" 权限重新启动 "),a("code",[t._v("adbd")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb start-server")])]),t._v(" "),a("td",[t._v("启动 "),a("code",[t._v("adb")]),t._v(" 服务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb kill-server")])]),t._v(" "),a("td",[t._v("停止 "),a("code",[t._v("adb")]),t._v(" 服务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb remount")])]),t._v(" "),a("td",[t._v("重新挂载具有读/写访问权限的文件系统")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb reboot")])]),t._v(" "),a("td",[t._v("重启设备")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb reboot bootloader")])]),t._v(" "),a("td",[t._v("将设备重启到 fastboot 模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb reboot recovery")])]),t._v(" "),a("td",[t._v("将设备重启到恢复模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb disable-verity")])]),t._v(" "),a("td",[t._v("禁用设备的 dm-verity 安全特性")])])])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("code",[t._v("wait-for-device")]),t._v(" 可以在 "),a("code",[t._v("adb")]),t._v(" 之后指定，以确保该命令在设备连接后运行")]),t._v(" "),a("li",[a("code",[t._v("-s")]),t._v(" 可用于在多个连接时将命令发送到特定设备")])]),t._v(" "),a("h4",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb wait-for-device devices\n List of devices attached\n somedevice-1234 device\n someotherdevice-1234 device\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" somedevice-1234 root\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"logcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logcat"}},[t._v("#")]),t._v(" Logcat")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb logcat")])]),t._v(" "),a("td",[t._v("将日志消息打印到标准输出")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb logcat -g")])]),t._v(" "),a("td",[t._v("显示当前日志缓冲区大小")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb logcat -G <size>")])]),t._v(" "),a("td",[t._v("设置缓冲区大小（K 或 M）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb logcat -c")])]),t._v(" "),a("td",[t._v("清除日志缓冲区")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb logcat *:V")])]),t._v(" "),a("td",[t._v("启用所有日志消息（详细）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb logcat -f <filename>")])]),t._v(" "),a("td",[t._v("将日志转储到指定文件")])])])]),t._v(" "),a("h4",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb logcat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-G")]),t._v(" 16M\n$ adb logcat *:V "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" output.log\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"过滤日志输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过滤日志输出"}},[t._v("#")]),t._v(" 过滤日志输出")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("V")]),t._v(" 最详细的信息(最低优先级)")]),t._v(" "),a("li",[a("code",[t._v("D")]),t._v(" 调试信息")]),t._v(" "),a("li",[a("code",[t._v("I")]),t._v(" 普通信息")]),t._v(" "),a("li",[a("code",[t._v("W")]),t._v(" 警告信息")]),t._v(" "),a("li",[a("code",[t._v("E")]),t._v(" 错误信息")]),t._v(" "),a("li",[a("code",[t._v("F")]),t._v(" 致命错误信息")]),t._v(" "),a("li",[a("code",[t._v("S")]),t._v(" 静默(最高优先级)\n")])]),t._v(" "),a("p",[t._v("例如，要显示优先级不低于 "),a("code",[t._v("警告")]),t._v(" 的所有标记的所有日志消息，可以使用以下命令：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb logcat *:W\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"文件管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[t._v("#")]),t._v(" 文件管理")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb push <local> <remote>")])]),t._v(" "),a("td",[t._v("将本地文件复制到远程设备")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb pull <remote> <local>")])]),t._v(" "),a("td",[t._v("将远程设备文件复制到本地")])])])]),t._v(" "),a("h4",{attrs:{id:"示例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a test"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" test.txt\n$ adb push  test.txt /sdcard/test.txt\n$ adb pull /sdcard/test.txt pulledTest.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"远程-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程-shell"}},[t._v("#")]),t._v(" 远程 Shell")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell <command>")])]),t._v(" "),a("td",[t._v("在设备上运行指定的命令（大多数 Unix 命令在这里工作）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell wm size")])]),t._v(" "),a("td",[t._v("显示当前屏幕分辨率")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell wm size WxH")])]),t._v(" "),a("td",[t._v("将分辨率设置为 WxH")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell pm list packages")])]),t._v(" "),a("td",[t._v("列出所有已安装的应用包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell pm list packages -3")])]),t._v(" "),a("td",[t._v("列出所有已安装的第三方的应用包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell monkey -p app.package.name")])]),t._v(" "),a("td",[t._v("启动指定包名的应用程序")])])])]),t._v(" "),a("h3",{attrs:{id:"包安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包安装"}},[t._v("#")]),t._v(" 包安装")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell install <apk>")])]),t._v(" "),a("td",[t._v("安装应用程序")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell install <path>")])]),t._v(" "),a("td",[t._v("从手机路径安装应用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell install -r <path>")])]),t._v(" "),a("td",[t._v("从手机路径安装应用（允许覆盖安装）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell uninstall <name>")])]),t._v(" "),a("td",[t._v("卸载应用程序")])])])]),t._v(" "),a("h3",{attrs:{id:"paths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paths"}},[t._v("#")]),t._v(" Paths")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/data/data/<package>/databases")])]),t._v(" "),a("td",[t._v("应用程序数据库")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/data/data/<package>/shared_prefs/")])]),t._v(" "),a("td",[t._v("共享偏好设置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/data/app")])]),t._v(" "),a("td",[t._v("用户安装的 APK")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/system/app")])]),t._v(" "),a("td",[t._v("系统预装的 APK 文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/mmt/asec")])]),t._v(" "),a("td",[t._v("加密的应用程序（App2SD）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/mmt/emmc")])]),t._v(" "),a("td",[t._v("内部 SD 卡")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/mmt/adcard")])]),t._v(" "),a("td",[t._v("外部/内部 SD 卡")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/mmt/adcard/external_sd")])]),t._v(" "),a("td",[t._v("外置 SD 卡")])])])]),t._v(" "),a("hr"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell ls")])]),t._v(" "),a("td",[t._v("列出目录内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell ls -s")])]),t._v(" "),a("td",[t._v("每个文件的打印尺寸")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell ls -R")])]),t._v(" "),a("td",[t._v("递归列出子目录")])])])]),t._v(" "),a("h3",{attrs:{id:"手机信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机信息"}},[t._v("#")]),t._v(" 手机信息")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb get-statе")])]),t._v(" "),a("td",[t._v("打印设备状态")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb get-serialno")])]),t._v(" "),a("td",[t._v("获取设备的序列号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell dumpsys iphonesybinfo")])]),t._v(" "),a("td",[t._v("获取设备的 IMEI 信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell netstat")])]),t._v(" "),a("td",[t._v("列出设备上的所有 TCP 连接")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell pwd")])]),t._v(" "),a("td",[t._v("打印当前工作目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell dumpsys battery")])]),t._v(" "),a("td",[t._v("获取设备电池状态")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell pm list features")])]),t._v(" "),a("td",[t._v("列出设备支持的所有功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell service list")])]),t._v(" "),a("td",[t._v("列出设备上运行的所有服务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell dumpsys activity <package>/<activity>")])]),t._v(" "),a("td",[t._v("获取指定包和活动的信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell ps")])]),t._v(" "),a("td",[t._v("打印设备上所有运行的进程状态")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell wm size")])]),t._v(" "),a("td",[t._v("显示当前设备的屏幕分辨率")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("dumpsys window windows")]),t._v(" | "),a("code",[t._v("grep -E 'mCurrentFocus\\|mFocusedApp'")])]),t._v(" "),a("td",[t._v("打印当前应用程序的打开活动的信息")])])])]),t._v(" "),a("h3",{attrs:{id:"包信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包信息"}},[t._v("#")]),t._v(" 包信息")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell list packages")])]),t._v(" "),a("td",[t._v("列出包名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell list packages -r")])]),t._v(" "),a("td",[t._v("列出包名 + apks 的路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell list packages -3")])]),t._v(" "),a("td",[t._v("列出第三方包名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell list packages -s")])]),t._v(" "),a("td",[t._v("仅列出系统包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell list packages -u")])]),t._v(" "),a("td",[t._v("列出包名称 + 已卸载")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell dumpsys package packages")])]),t._v(" "),a("td",[t._v("列出所有应用程序的信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell dump <name>")])]),t._v(" "),a("td",[t._v("列出一个包的信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell path <package>")])]),t._v(" "),a("td",[t._v("列出 APK 文件的路径")])])])]),t._v(" "),a("h3",{attrs:{id:"设备相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备相关命令"}},[t._v("#")]),t._v(" 设备相关命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb reboot recovery")])]),t._v(" "),a("td",[t._v("重启设备进入恢复模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb reboot fastboot")])]),t._v(" "),a("td",[t._v("重启设备进入恢复模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('adb shell screencap -p "/path/to/screenshot.png"')])]),t._v(" "),a("td",[t._v("截图")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('adb shell screenrecord "/path/to/record.mp4"')])]),t._v(" "),a("td",[t._v("录制设备屏幕")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb backup -apk -all -f backup.ab")])]),t._v(" "),a("td",[t._v("备份设置和应用程序")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb backup -apk -shared -all -f backup.ab")])]),t._v(" "),a("td",[t._v("备份设置、应用程序和共享存储")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb backup -apk -nosystem -all -f backup.ab")])]),t._v(" "),a("td",[t._v("仅备份非系统应用程序")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb restore backup.ab")])]),t._v(" "),a("td",[t._v("恢复以前的备份")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell am start -a android.intent.action.VIEW -d URL")])]),t._v(" "),a("td",[t._v("打开网址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell am start -t image/* -a android.intent.action.VIEW")])]),t._v(" "),a("td",[t._v("打开画廊")])])])]),t._v(" "),a("h3",{attrs:{id:"权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[t._v("#")]),t._v(" 权限")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell permissions groups")])]),t._v(" "),a("td",[t._v("列出所有已定义的权限组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb shell list permissions -g -r")])]),t._v(" "),a("td",[t._v("列出了所有权限的详细信息")])])])]),t._v(" "),a("h3",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[t._v("#")]),t._v(" Logs")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v(":--")]),t._v(" "),a("th",[t._v("--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb logcat [options] [filter] [filter]")])]),t._v(" "),a("td",[t._v("查看设备日志")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("adb bugreport")])]),t._v(" "),a("td",[t._v("打印错误报告")])])])]),t._v(" "),a("h2",{attrs:{id:"常见的-adb-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的-adb-命令"}},[t._v("#")]),t._v(" 常见的 ADB 命令")]),t._v(" "),a("h3",{attrs:{id:"将文件推送到-android-设备的下载文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将文件推送到-android-设备的下载文件夹"}},[t._v("#")]),t._v(" 将文件推送到 Android 设备的下载文件夹")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb push example.apk /sdcard/Download/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"列出所有已安装的包并获取完整路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出所有已安装的包并获取完整路径"}},[t._v("#")]),t._v(" 列出所有已安装的包并获取完整路径")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell pm list packages "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"从安卓设备中提取文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从安卓设备中提取文件"}},[t._v("#")]),t._v(" 从安卓设备中提取文件")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb pull /sdcard/Download/example.apk\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"从主机安装-apk-到-android-设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从主机安装-apk-到-android-设备"}},[t._v("#")]),t._v(" 从主机安装 APK 到 Android 设备")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" example.apk\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"从-android-设备存储安装-apk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-android-设备存储安装-apk"}},[t._v("#")]),t._v(" 从 Android 设备存储安装 APK")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" /sdcard/Download/example.apk\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"设置网络代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置网络代理"}},[t._v("#")]),t._v(" 设置网络代理")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell settings put global http_proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"禁用网络代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用网络代理"}},[t._v("#")]),t._v(" 禁用网络代理")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell settings put global http_proxy :0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"显示连接的设备并指定一个设备进行-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示连接的设备并指定一个设备进行-shell"}},[t._v("#")]),t._v(" 显示连接的设备并指定一个设备进行 Shell")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb devices\n$ adb "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" 7f1c864e shell\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("code",[t._v("7f1c864e")]),t._v(" 是设备 "),a("code",[t._v("ID")])]),t._v(" "),a("h3",{attrs:{id:"通过-ip-地址连接到设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-ip-地址连接到设备"}},[t._v("#")]),t._v(" 通过 IP 地址连接到设备")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb connect "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".56.101:5555\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"通过-wi-fi-连接-adb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-wi-fi-连接-adb"}},[t._v("#")]),t._v(" 通过 Wi-Fi 连接 ADB")]),t._v(" "),a("p",[t._v("我们可以通过 "),a("code",[t._v("Wi-Fi")]),t._v(" 或专门使用 "),a("code",[t._v("tcp")]),t._v(" 连接使用 "),a("code",[t._v("adb")]),t._v("。 要通过 "),a("code",[t._v("Wi-Fi")]),t._v(" 使用 "),a("code",[t._v("adb")]),t._v("，首先通过 "),a("code",[t._v("USB")]),t._v(" 连接手机并启用 "),a("code",[t._v("USB")]),t._v(" 调试。然后列出所有设备：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb devices\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这应该给出这样的输出：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# device_id    device")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("现在检查 "),a("code",[t._v("Android")]),t._v(" 设备的 "),a("code",[t._v("IP")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出:")]),t._v("\n\nwlan0  Link encap:UNSPEC    Driver icnss\n       inet addr:XXX.XXX.X.XX  Bcast:XXX.XXX.X.XXX\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("记下 "),a("code",[t._v("inet addr")]),t._v(" 后的 "),a("code",[t._v("IP")]),t._v(" 地址。稍后要用。现在在某个端口重新启动 "),a("code",[t._v("tcpip")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb tcpip "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$port")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("例如 5555：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb tcpip "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5555")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("您现在可以断开 USB 线缆使用。 若要连接到设备请键入以下命令：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb connect "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ip")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$port")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("例如:")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb connect "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.4:5555\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"将计算机上的-apk-文件安装到设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将计算机上的-apk-文件安装到设备"}},[t._v("#")]),t._v(" 将计算机上的 APK 文件安装到设备")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" /Users/dev/projects/myapp.apk\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"查找应用的-apk-路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找应用的-apk-路径"}},[t._v("#")]),t._v(" 查找应用的 APK 路径")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell pm path com.example.myapp\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("将 "),a("code",[t._v("com.example.myapp")]),t._v(" 替换为您自己的应用程序包名称")]),t._v(" "),a("h3",{attrs:{id:"通过名称查找应用的包名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过名称查找应用的包名"}},[t._v("#")]),t._v(" 通过名称查找应用的包名")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell pm list package "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" app_name\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"从设备提取-apk-到您的计算机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从设备提取-apk-到您的计算机"}},[t._v("#")]),t._v(" 从设备提取 APK 到您的计算机")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb pull /data/app/com.example.myapp.apk ./\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"将文件从计算机复制到设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将文件从计算机复制到设备"}},[t._v("#")]),t._v(" 将文件从计算机复制到设备")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb push path/to/local/file /sdcard/foo.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"滚动屏幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动屏幕"}},[t._v("#")]),t._v(" 滚动屏幕")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell input swipe "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上")]),t._v("\n$ adb shell input swipe "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"发文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发文本"}},[t._v("#")]),t._v(" 发文本")]),t._v(" "),a("p",[t._v("使用虚拟键盘发送文本：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell input text "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"发送按键事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送按键事件"}},[t._v("#")]),t._v(" 发送按键事件")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell input keyevent "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("66")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 66 是回车键码")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"发送点击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送点击"}},[t._v("#")]),t._v(" 发送点击")]),t._v(" "),a("p",[t._v("点击屏幕：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell input tap x y\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看包的日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看包的日志"}},[t._v("#")]),t._v(" 查看包的日志")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ adb shell "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logcat --pid=$(pidof -s <package_name>)'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("查看特定包的日志")])])}),[],!1,null,null,null);a.default=l.exports}}]);