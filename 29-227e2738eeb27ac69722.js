(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{iQIm:function(n,e,t){"use strict";t.r(e),t.d(e,"_demoSrcFiles",(function(){return p}));var o=t("mXGw"),a=t.n(o),l=t("F1/0"),r=t("ZREC"),s=t("BgHK"),i=t("1j5s"),c=function(n){var e=n.key,t=n.label;return a.a.createElement(l.Link,{to:e},t)},m=[{key:"/home",label:"首页",render:c,navProps:{className:"test-nav-item-pros",icon:"smile","custom-dom-property":"8237461"}},{key:"/instance",label:"实例",render:c},{key:"/logs",label:"日志",items:[{key:"/daily",label:"日常环境",render:c},{key:"/pre",label:"预发环境",render:c},{key:"/prod",label:"生产环境",render:c}],navProps:{className:"test-nav-sub-menu-pros",icon:"smile","custom-dom-property":"8237461"}},{key:"/others",label:"其他",items:[{key:"/help",label:"帮助",render:function(n){n.key;var e=n.label;return a.a.createElement("a",{href:"https://help.aliyun.com",target:"_blank",rel:"noopener noreferrer"},e)}},{key:"/docs",label:"文档",disabled:!0,render:function(n){n.key;var e=n.label;return a.a.createElement("a",{href:"https://docs.aliyun.com",target:"_blank",rel:"noopener noreferrer"},e)}}]}];e.default=function(){return a.a.createElement(i.FakeBrowserWithWrapper,null,a.a.createElement(l.Route,null,(function(n){var e=n.location,t=n.history,l=function(n){return n&&n.pathname&&"/"!==n.pathname?n.pathname:"/home"}(e);return a.a.createElement(o.Fragment,null,a.a.createElement("div",{style:{marginBottom:8}},a.a.createElement(s.Input,{key:e.pathname,style:{width:"100%"},defaultValue:e.pathname,onPressEnter:function(n){t.push(n.target.value)}})),a.a.createElement("div",null,a.a.createElement(r.default,{header:"阿里云控制台",items:m,activeKey:l})))})))};var p={"package.json":'{\n  "name": "console-components-demo",\n  "version": "1.0.0",\n  "description": "",\n  "keywords": [],\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "@alicloud/console-components-fake-browser": "latest",\n    "@alicloud/console-components": "latest",\n    "dva": "^2.4.1",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react": "16.8.4",\n    "react-dom": "16.8.4",\n    "react-scripts": "2.1.3",\n    "@alicloud/console-components-actions": "latest",\n    "@alicloud/console-components-app-layout": "latest",\n    "@alicloud/console-components-confirm": "latest",\n    "@alicloud/console-components-console-menu": "latest",\n    "@alicloud/console-components-data-fields": "latest",\n    "@alicloud/console-components-info": "latest",\n    "@alicloud/console-components-page": "latest",\n    "@alicloud/console-components-slide-panel": "latest",\n    "@alicloud/console-components-status-indicator": "latest",\n    "@alicloud/console-components-table": "latest",\n    "@alicloud/console-components-truncate": "latest",\n    "@alicloud/console-components-select-list": "latest",\n    "@alicloud/console-components-intl": "latest",\n    "@alicloud/console-components-intl-core": "latest",\n    "@alicloud/console-components-intl-context": "latest",\n    "@alicloud/console-components-announcement": "latest"\n  },\n  "devDependencies": {\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2",\n    "@types/styled-components": "^4.1.8",\n    "typescript": "^3.7.2"\n  },\n  "browserslist": [\n    ">0.2%",\n    "not dead",\n    "not ie <= 11",\n    "not op_mini all"\n  ]\n}\n',"index.html":'<html>\n  <head>\n    <title>Console Components Demo</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.tsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "template": "parcel"\n}',"src/index.tsx":"import * as React from 'react'\nimport { render } from 'react-dom'\nimport '@alicloud/console-components/dist/wind.css'\nimport App from './demo/with-items-declaration'\n\nconst rootElement = document.getElementById('app')\nrender(<App />, rootElement)\n","tsconfig.json":'{\n  "compilerOptions": {\n    "jsx": "react",\n    "moduleResolution": "node",\n    "esModuleInterop": true\n  }\n}\n',"src/demo/with-items-declaration.tsx":"import React, { Fragment } from 'react'\nimport { Link, Route } from 'dva/router'\nimport { Location } from 'history'\nimport ConsoleMenu, { IItemDescriptor } from '@alicloud/console-components-console-menu'\nimport { Input } from '@alicloud/console-components'\nimport { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'\n\nconst renderLinkItem = ({ key, label }: IItemDescriptor) => (\n  <Link to={key}>{label}</Link>\n)\n\nconst items: IItemDescriptor[] = [\n  // Defination with label\n  {\n    key: '/home',\n    label: '首页',\n    render: renderLinkItem,\n    navProps: {\n      // 透传给Nav.Item组件的props\n      className: 'test-nav-item-pros',\n      icon: 'smile',\n      // Nav.Item组件不认识的pros，会被它透传到`<li>`DOM节点上\n      'custom-dom-property': '8237461',\n    },\n  },\n\n  // Defination with custom render\n  { key: '/instance', label: '实例', render: renderLinkItem },\n\n  // Defination as a sub menu\n  {\n    key: '/logs',\n    label: '日志',\n    items: [\n      { key: '/daily', label: '日常环境', render: renderLinkItem },\n      { key: '/pre', label: '预发环境', render: renderLinkItem },\n      { key: '/prod', label: '生产环境', render: renderLinkItem },\n    ],\n    navProps: {\n      // 透传给Nav.SubNav组件的props\n      className: 'test-nav-sub-menu-pros',\n      icon: 'smile',\n      // Nav.SubNav组件不认识的pros，会被它透传到`<li>`DOM节点上\n      'custom-dom-property': '8237461',\n    },\n  },\n\n  // Another sub menu\n  {\n    key: '/others',\n    label: '其他',\n    items: [\n      {\n        key: '/help',\n        label: '帮助',\n        render: ({ key, label }) => (\n          <a\n            href=\"https://help.aliyun.com\"\n            target=\"_blank\"\n            rel=\"noopener noreferrer\"\n          >\n            {label}\n          </a>\n        ),\n      },\n      {\n        key: '/docs',\n        label: '文档',\n        disabled: true,\n        render: ({ key, label }) => (\n          <a\n            href=\"https://docs.aliyun.com\"\n            target=\"_blank\"\n            rel=\"noopener noreferrer\"\n          >\n            {label}\n          </a>\n        ),\n      },\n    ],\n  },\n]\n\n/**\n * 将当前的 location 映射为被选中的 key\n * @param {Location} location\n */\nconst mapLocationToActiveKey = (location: Location) => {\n  if (!location || !location.pathname || location.pathname === '/') {\n    return '/home'\n  }\n\n  return location.pathname\n}\n\n/**\n * 使用 items 声明结构化的导航菜单\n */\nconst Example = () => {\n  return (\n    <FakeBrowser>\n      <Route>\n        {({ location, history }) => {\n          const activeKey = mapLocationToActiveKey(location)\n\n          return (\n            <Fragment>\n              <div style={{ marginBottom: 8 }}>\n                <Input\n                  key={location.pathname}\n                  style={{ width: '100%' }}\n                  defaultValue={location.pathname}\n                  onPressEnter={\n                    ((e: any) => {\n                      history.push(e.target.value)\n                    }) as any\n                  }\n                />\n              </div>\n              <div>\n                <ConsoleMenu\n                  header=\"阿里云控制台\"\n                  items={items}\n                  activeKey={activeKey}\n                />\n              </div>\n            </Fragment>\n          )\n        }}\n      </Route>\n    </FakeBrowser>\n  )\n}\n\nexport default Example\n","demoMeta.json":'{"entryPath":"src/demo/with-items-declaration.tsx"}'}}}]);
//# sourceMappingURL=29-227e2738eeb27ac69722.js.map