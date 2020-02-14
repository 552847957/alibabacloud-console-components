(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{UMFU:function(e,n,o){"use strict";o.r(n),o.d(n,"_demoSrcFiles",(function(){return r}));var t=o("mXGw"),l=o.n(t),a=o("BgHK"),s=o("fpYS"),c=o("ZREC"),m=o("i2DF"),i=function(){return l.a.createElement(c.default,{header:"产品控制台"},l.a.createElement(c.default.Item,{key:"overview"},"概览"),l.a.createElement(c.default.Item,{key:"instance"},"实例"),l.a.createElement(c.default.SubMenu,{key:"log",label:"日志"},l.a.createElement(c.default.Item,{key:"access-log"},"访问日志"),l.a.createElement(c.default.Item,{key:"load-log"},"负载日志")),l.a.createElement(c.default.Item,{key:"help"},"产品帮助"),l.a.createElement(c.default.Item,{key:"api-docs"},"API 文档"))};n.default=function(){return l.a.createElement(s.a,{nav:l.a.createElement(i,null)},l.a.createElement(m.a,null,l.a.createElement(m.a.Header,{title:"概览"}),l.a.createElement(m.a.Content,null,l.a.createElement(a.Message,{type:"success"},"您购买的位于新加坡的 A3 型实例",l.a.createElement("a",{href:"#",style:{padding:"0 4px"}},"ecs-7ui6t9vra"),"已经部署完毕"))))};var r={"index.html":'<html>\n  <head>\n    <title>Console Components Demo</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.tsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "template": "parcel"\n}',"src/index.tsx":"import * as React from 'react'\nimport { render } from 'react-dom'\nimport '@alicloud/console-components/dist/wind.css'\nimport App from './demo/basic2'\n\nconst rootElement = document.getElementById('app')\nrender(<App />, rootElement)\n","package.json":'{\n  "name": "console-components-demo",\n  "version": "1.0.0",\n  "description": "",\n  "keywords": [],\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "@alicloud/console-components-fake-browser": "latest",\n    "@alicloud/console-components": "latest",\n    "dva": "^2.4.1",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react": "16.8.4",\n    "react-dom": "16.8.4",\n    "react-scripts": "2.1.3",\n    "@alicloud/console-components-actions": "latest",\n    "@alicloud/console-components-app-layout": "latest",\n    "@alicloud/console-components-confirm": "latest",\n    "@alicloud/console-components-console-menu": "latest",\n    "@alicloud/console-components-data-fields": "latest",\n    "@alicloud/console-components-info": "latest",\n    "@alicloud/console-components-page": "latest",\n    "@alicloud/console-components-slide-panel": "latest",\n    "@alicloud/console-components-status-indicator": "latest",\n    "@alicloud/console-components-table": "latest",\n    "@alicloud/console-components-truncate": "latest",\n    "@alicloud/console-components-select-list": "latest",\n    "@alicloud/console-components-intl": "latest",\n    "@alicloud/console-components-intl-core": "latest",\n    "@alicloud/console-components-intl-context": "latest",\n    "@alicloud/console-components-announcement": "latest"\n  },\n  "devDependencies": {\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2",\n    "@types/styled-components": "^4.1.8",\n    "typescript": "^3.7.2"\n  },\n  "browserslist": [\n    ">0.2%",\n    "not dead",\n    "not ie <= 11",\n    "not op_mini all"\n  ]\n}\n',"tsconfig.json":'{\n  "compilerOptions": {\n    "jsx": "react",\n    "moduleResolution": "node",\n    "esModuleInterop": true\n  }\n}\n',"src/demo/basic2.tsx":'import React from \'react\'\nimport { Message } from \'@alicloud/console-components\'\nimport AppLayout from \'@alicloud/console-components-app-layout\'\nimport ConsoleMenu from \'@alicloud/console-components-console-menu\'\nimport Page from \'@alicloud/console-components-page\'\n\n/* eslint-disable jsx-a11y/anchor-is-valid */\n\nconst Nav = () => (\n  <ConsoleMenu header="产品控制台">\n    <ConsoleMenu.Item key="overview">概览</ConsoleMenu.Item>\n    <ConsoleMenu.Item key="instance">实例</ConsoleMenu.Item>\n    <ConsoleMenu.SubMenu key="log" label="日志">\n      <ConsoleMenu.Item key="access-log">访问日志</ConsoleMenu.Item>\n      <ConsoleMenu.Item key="load-log">负载日志</ConsoleMenu.Item>\n    </ConsoleMenu.SubMenu>\n    <ConsoleMenu.Item key="help">产品帮助</ConsoleMenu.Item>\n    <ConsoleMenu.Item key="api-docs">API 文档</ConsoleMenu.Item>\n  </ConsoleMenu>\n)\n\nconst Example = () => (\n  <AppLayout nav={<Nav />}>\n    <Page>\n      <Page.Header title="概览" />\n      <Page.Content>\n        <Message type="success">\n          您购买的位于新加坡的 A3 型实例\n          <a href="#" style={{ padding: \'0 4px\' }}>\n            ecs-7ui6t9vra\n          </a>\n          已经部署完毕\n        </Message>\n      </Page.Content>\n    </Page>\n  </AppLayout>\n)\n\nexport default Example\n',"demoMeta.json":'{"entryPath":"src/demo/basic2.tsx"}'}}}]);
//# sourceMappingURL=18-022e78a0c3d10723055a.js.map