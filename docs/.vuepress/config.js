module.exports = {
  title: '文档搬运工',
  description: '学习笔记，包含前端开发、后端开发、服务器运维等',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  host: 'localhost',
  port: '9000',
  base: '/web', // 这是部署到github相关的配置 下面会讲
  dest: '/public',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // displayAllHeaders: true,
    // permalink: "/:year/:month/:day/:slug",
    nav: [
      {
        text: '前端',
        items: [
          { text: '前端导航', link: '/frontend/feds' },
          { text: 'CSS3', link: '/frontend/css' },
          { text: 'Electron', link: '/frontend/electron' },
          { text: 'ES6', link: '/frontend/es6' },
          { text: 'Styled Components', link: '/frontend/styled-components' },
          { text: 'Stylus', link: '/frontend/stylus' },
          { text: 'Sass', link: '/frontend/sass' },
          { text: 'HTML', link: '/frontend/html' },
          { text: 'JavaScript', link: '/frontend/javascript' },
          { text: 'jQuery', link: '/frontend/jquery' },
          { text: 'Less', link: '/frontend/lessjs' },
          { text: 'Next', link: '/frontend/nextjs' },
          { text: 'React', link: '/frontend/react' },
          { text: 'React Router', link: '/frontend/reactrouter' },
          { text: 'React Native', link: '/frontend/react-native' },
          { text: 'Regex 正则表达式', link: '/frontend/regex' },
          { text: 'TypeScript', link: '/frontend/typescript' },
          { text: 'Tailwind CSS', link: '/frontend/tailwindcss' },
          { text: 'Vue2', link: '/frontend/vue2' },
          { text: 'Vue3', link: '/frontend/vue' },
        ]
      },
      {
        text: '编程',
        items: [
          { text: 'Bash', link: '/program/bash' },
          { text: 'C', link: '/program/c' },
          { text: 'C++', link: '/program/cpp' },
          { text: 'Dart', link: '/program/dart' },
          { text: 'Docker', link: '/program/docker' },
          { text: 'Flutter', link: '/program/flutter' },
          { text: 'Golang', link: '/program/golang' },
          { text: 'GraphQL', link: '/program/graphql' },
          { text: 'Java', link: '/program/java' },
          { text: 'JSON', link: '/program/json' },
          { text: 'Kubernetes', link: '/program/kubernetes' },
          { text: 'Markdown', link: '/program/markdown' },
          { text: 'MATLAB', link: '/program/matlab' },
          { text: 'PHP', link: '/program/php' },
          { text: 'Python', link: '/program/python' },
          { text: 'Ruby', link: '/program/ruby' },
          { text: 'Rust', link: '/program/rust' },
          { text: 'Swift', link: '/program/swift' },
          { text: 'SwiftUI', link: '/program/swiftui' },
          { text: 'YAML', link: '/program/yaml' },
        ]
      },
      {
        text: 'Nodejs',
        items: [
          { text: 'Express.js', link: '/nodejs/expressjs' },
          { text: 'Jest', link: '/nodejs/jest' },
          { text: 'Koa.js', link: '/nodejs/koajs' },
          { text: 'Lerna', link: '/nodejs/lerna' },
          { text: 'npm', link: '/nodejs/npm' },
          { text: 'NestJS', link: '/nodejs/nestjs' },
          { text: 'PM2', link: '/nodejs/pm2' },
          { text: 'Package.json', link: '/nodejs/package.json' },
          { text: 'Yarn', link: '/nodejs/yarn' },
        ]
      },
      {
        text: '工具',
        items: [
          { text: 'Emacs', link: '/tool/emacs' },
          { text: 'Github', link: '/tool/github' },
          { text: 'Nginx', link: '/tool/nginx' },
          { text: 'Semver', link: '/tool/semver' },
          { text: 'Vim', link: '/tool/vim' },
          { text: 'XPath', link: '/tool/xpath' }, 
        ]
      },
      {
        text: '命令',
        items: [
          { text: 'ADB, Android Debug Bridge', link: '/command/adb' },
          { text: 'Conan', link: '/command/conan' },
          { text: 'Conda', link: '/command/conda' },
          { text: 'CocoaPods', link: '/command/cocoapods' },
          { text: 'Cargo', link: '/command/cargo' },
          { text: 'Curl', link: '/command/curl' }, 
          { text: 'Chmod', link: '/command/chmod' }, 
          { text: 'Cron', link: '/command/cron' }, 
          { text: 'CMake', link: '/command/cmake' }, 
          { text: 'Make', link: '/command/make' }, 
          { text: 'Git', link: '/command/git' }, 
          { text: 'Grep', link: '/command/grep' }, 
          { text: 'Find', link: '/command/find' }, 
          { text: 'FFmpeg', link: '/command/ffmpeg' }, 
          { text: 'Htop', link: '/command/htop' }, 
          { text: 'Homebrew', link: '/command/homebrew' }, 
          { text: 'Netstat', link: '/command/netstat' }, 
          { text: 'iptables', link: '/command/iptables' }, 
          { text: 'jq', link: '/command/jq' }, 
          { text: 'Justfile', link: '/command/justfile' }, 
          { text: 'Lsof', link: '/command/lsof' }, 
          { text: 'Mitmproxy', link: '/command/mitmproxy' }, 
          { text: 'Netcat', link: '/command/netcat' }, 
          { text: 'Sed', link: '/command/sed' }, 
          { text: 'OpenSSL', link: '/command/openssl' }, 
          { text: 'ps', link: '/command/ps' }, 
          { text: 'Systemd', link: '/command/systemd' }, 
          { text: 'SSH', link: '/command/ssh' }, 
          { text: 'Screen', link: '/command/screen' }, 
          { text: 'YUM', link: '/command/yum' }, 
          { text: 'CMD', link: '/command/cmd' }, 
          { text: 'Zip', link: '/command/zip' }, 
          { text: 'APT', link: '/command/apt' }, 
          { text: 'tar', link: '/command/tar' }, 
          { text: 'Linux Command', link: '/command/linux-command' }, 
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'MySQL', link: '/database/mysql' },
          { text: 'MongoDB', link: '/database/mongodb' },
          { text: 'Oracle', link: '/database/oracle' },
          { text: 'PostgreSQL', link: '/database/postgres' },
          { text: 'Redis', link: '/database/redis' }
        ]
      },
      {
        text: '快捷键',
        items: [
          { text: 'Adobe Lightroom', link: '/quicklink/adobe-lightroom' },
          { text: 'Adobe Photoshop', link: '/quicklink/adobe-photoshop' },
          { text: 'Adobe XD', link: '/quicklink/adobe-xd' },
          { text: 'Android Studio', link: '/quicklink/android-studio' },
          { text: 'Firefox', link: '/quicklink/firefox' },
          { text: 'Gmail', link: '/quicklink/gmail' },
          { text: 'Gitlab', link: '/quicklink/gitlab' },
          { text: 'Google Chrome', link: '/quicklink/google-chrome' },
          { text: 'IntelliJ IDEA', link: '/quicklink/intelli-j-idea' },
          { text: 'PyCharm', link: '/quicklink/pycharm' },
          { text: 'Sketch', link: '/quicklink/sketch' },
          { text: 'Sublime Text', link: '/quicklink/sublime-text' },
          { text: 'VSCode', link: '/quicklink/vscode' },
          { text: 'WebStorm', link: '/quicklink/webstorm' },
          { text: 'Xcode', link: '/quicklink/xcode' },
        ]
      },
      {
        text: '其它',
        items: [
          { text: 'Aspect Ratio', link: '/other/aspect-ratio' },
          { text: 'Github Actions', link: '/other/github-actions' },
          { text: 'Gitlab CI/CD', link: '/other/gitlab-ci' },
          { text: 'Colors Named', link: '/other/colors-named' },
          { text: 'HTTP 状态码', link: '/other/http-status-code' },
          { text: 'HTML 字符实体', link: '/other/html-char' },
          { text: 'ISO 639-1 Language Code', link: '/other/iso-639-1' },
          { text: 'Emoji', link: '/other/emoji' },
          { text: 'MIME types', link: '/other/mime' },
          { text: 'Resolutions', link: '/other/resolutions' },
        ]
      },
    ],
    sidebar: 'auto',
  },
}