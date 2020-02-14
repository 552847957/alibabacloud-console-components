(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"LBb+":function(e,n,o){"use strict";o.r(n),o.d(n,"_demoSrcFiles",(function(){return i}));var t=o("mXGw"),l=o.n(t),a=o("F1/0"),s=o("ZREC"),c=o("1j5s"),r=function(){return l.a.createElement(a.Route,null,(function(e){var n=function(e){return e&&e.pathname&&"/"!==e.pathname?e.pathname:"/home"}(e.location);return l.a.createElement(s.default,{header:"Aliyun Console",activeKey:n},l.a.createElement(s.default.Item,{key:"/home"},l.a.createElement(a.Link,{to:"/home"},"首页")),l.a.createElement(s.default.Item,{key:"/list"},l.a.createElement(a.Link,{to:"/list"},"实例")),l.a.createElement(s.default.SubMenu,{key:"logs",label:"日志"},l.a.createElement(s.default.Item,{key:"/daily"},l.a.createElement(a.Link,{to:"/daily"},"日常环境")),l.a.createElement(s.default.Item,{key:"/prod"},l.a.createElement(a.Link,{to:"/prod"},"生产环境"))),l.a.createElement(s.default.SubMenu,{key:"others",label:"其他"},l.a.createElement(s.default.Item,{key:"help"},l.a.createElement("a",{href:"https://www.aliyun.com",target:"_blank",rel:"noopener noreferrer"},"帮助")),l.a.createElement(s.default.Item,{key:"docs",disabled:!0},"文档")))}))};n.default=function(){return l.a.createElement(c.FakeBrowserWithWrapper,null,l.a.createElement(r,null))};var i={"package.json":'{\n  "name": "console-components-demo",\n  "version": "1.0.0",\n  "description": "",\n  "keywords": [],\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "@alicloud/console-components-fake-browser": "latest",\n    "@alicloud/console-components": "latest",\n    "dva": "^2.4.1",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react": "16.8.4",\n    "react-dom": "16.8.4",\n    "react-scripts": "2.1.3",\n    "@alicloud/console-components-actions": "latest",\n    "@alicloud/console-components-app-layout": "latest",\n    "@alicloud/console-components-confirm": "latest",\n    "@alicloud/console-components-console-menu": "latest",\n    "@alicloud/console-components-data-fields": "latest",\n    "@alicloud/console-components-info": "latest",\n    "@alicloud/console-components-page": "latest",\n    "@alicloud/console-components-slide-panel": "latest",\n    "@alicloud/console-components-status-indicator": "latest",\n    "@alicloud/console-components-table": "latest",\n    "@alicloud/console-components-truncate": "latest",\n    "@alicloud/console-components-select-list": "latest",\n    "@alicloud/console-components-intl": "latest",\n    "@alicloud/console-components-intl-core": "latest",\n    "@alicloud/console-components-intl-context": "latest",\n    "@alicloud/console-components-announcement": "latest"\n  },\n  "devDependencies": {\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2",\n    "@types/styled-components": "^4.1.8",\n    "typescript": "^3.7.2"\n  },\n  "browserslist": [\n    ">0.2%",\n    "not dead",\n    "not ie <= 11",\n    "not op_mini all"\n  ]\n}\n',"index.html":'<html>\n  <head>\n    <title>Console Components Demo</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.tsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "template": "parcel"\n}',"tsconfig.json":'{\n  "compilerOptions": {\n    "jsx": "react",\n    "moduleResolution": "node",\n    "esModuleInterop": true\n  }\n}\n',"src/index.tsx":"import * as React from 'react'\nimport { render } from 'react-dom'\nimport '@alicloud/console-components/dist/wind.css'\nimport App from './demo/controlled-menu'\n\nconst rootElement = document.getElementById('app')\nrender(<App />, rootElement)\n","src/demo/controlled-menu.tsx":'import React from \'react\'\nimport { Route, Link } from \'dva/router\'\nimport { Location } from \'history\'\nimport ConsoleMenu from \'@alicloud/console-components-console-menu\'\nimport { FakeBrowserWithWrapper as FakeBrowser } from \'@alicloud/console-components-fake-browser\'\n\n/**\n * 将当前的 location 映射为被选中的 key\n * @param {Location} location\n */\nconst mapLocationToActiveKey = (location: Location) => {\n  if (!location || !location.pathname || location.pathname === \'/\') {\n    return \'/home\'\n  }\n\n  return location.pathname\n}\n\n/**\n * 结合 `<Route>` 和 `<Link>` 自定义受控的导航菜单\n */\nconst Example = () => (\n  <Route>\n    {({ location }) => {\n      const activeKey = mapLocationToActiveKey(location)\n      return (\n        <ConsoleMenu header="Aliyun Console" activeKey={activeKey}>\n          <ConsoleMenu.Item key="/home">\n            <Link to="/home">首页</Link>\n          </ConsoleMenu.Item>\n          <ConsoleMenu.Item key="/list">\n            <Link to="/list">实例</Link>\n          </ConsoleMenu.Item>\n          <ConsoleMenu.SubMenu key="logs" label="日志">\n            <ConsoleMenu.Item key="/daily">\n              <Link to="/daily">日常环境</Link>\n            </ConsoleMenu.Item>\n            <ConsoleMenu.Item key="/prod">\n              <Link to="/prod">生产环境</Link>\n            </ConsoleMenu.Item>\n          </ConsoleMenu.SubMenu>\n          <ConsoleMenu.SubMenu key="others" label="其他">\n            <ConsoleMenu.Item key="help">\n              <a\n                href="https://www.aliyun.com"\n                target="_blank"\n                rel="noopener noreferrer"\n              >\n                帮助\n              </a>\n            </ConsoleMenu.Item>\n            <ConsoleMenu.Item key="docs" disabled>\n              文档\n            </ConsoleMenu.Item>\n          </ConsoleMenu.SubMenu>\n        </ConsoleMenu>\n      )\n    }}\n  </Route>\n)\n\nconst FakeBrowserDemo = () => {\n  return (\n    <FakeBrowser>\n      <Example />\n    </FakeBrowser>\n  )\n}\n\nexport default FakeBrowserDemo\n',"demoMeta.json":'{"entryPath":"src/demo/controlled-menu.tsx"}'}}}]);
//# sourceMappingURL=25-548544597f9887af5530.js.map