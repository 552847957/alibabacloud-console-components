(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"Qx/p":function(n,e,t){"use strict";t.r(e),t.d(e,"_demoSrcFiles",(function(){return m}));var o=t("mXGw"),r=t.n(o),a=t("BgHK"),s=t("TiKg"),c=t.n(s);function l(n){console.log(n.format("L"))}e.default=function(){return r.a.createElement(a.Calendar,{onChange:l,defaultVisibleMonth:function(){return c()("2018-01","YYYY-MM",!0)}})};var m={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo5";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo5.js":"import React from 'react'\nimport { Calendar } from '@alicloud/console-components'\nimport moment from 'moment'\n\nfunction onDateChange(value) {\n  console.log(value.format('L'))\n}\n\nconst Demo5 = () => (\n  <Calendar \n    onChange={onDateChange} \n    defaultVisibleMonth={() => moment('2018-01', 'YYYY-MM', true)} />\n)\n\nexport default Demo5","demoMeta.json":'{"entryPath":"src/demo/demo5.js"}'}}}]);
//# sourceMappingURL=67-cc4db7a4cafc3c51df09.js.map