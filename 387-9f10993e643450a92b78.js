(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{vnbo:function(n,e,o){"use strict";o.r(e),o.d(e,"_demoSrcFiles",(function(){return p}));var t=o("mXGw"),a=o.n(t),l=o("BgHK");function c(n){console.log("beforeUpload : ",n)}function s(n){console.log("onChange : ",n)}function i(n){console.log("onSuccess : ",n)}e.default=function(){return a.a.createElement("div",null,a.a.createElement(l.Upload,{action:"//upload-server.alibaba.net/upload.do",beforeUpload:c,onChange:s,onSuccess:i,multiple:!0,defaultValue:[{name:"IMG.png",state:"done",size:1024,downloadURL:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",fileURL:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",imgURL:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"}]},a.a.createElement(l.Button,{type:"primary",style:{margin:"0 0 10px"}},"Upload File")),a.a.createElement("br",null),a.a.createElement(l.Upload,{shape:"card",style:{display:"inline-block"}},"Upload File"),a.a.createElement(l.Upload,{style:{display:"inline",marginLeft:"5px"}},a.a.createElement("div",{className:"next-upload-card"},a.a.createElement(l.Icon,{type:"attachment",size:"large"}),a.a.createElement("div",{className:"next-upload-text"},"Attachment"))))};var p={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo1";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/demo/demo1.js":"import React from 'react'\nimport { Upload, Button, Icon } from '@alicloud/console-components'\n\nconst Demo1 = () =>(\n  <div>\n    <Upload\n      action=\"//upload-server.alibaba.net/upload.do\"\n      beforeUpload={beforeUpload}\n      onChange={onChange}\n      onSuccess={onSuccess}\n      multiple\n      defaultValue={[{\n        name: 'IMG.png',\n        state: 'done',\n        size: 1024,\n        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n        fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'\n      }]}\n    >\n      <Button type=\"primary\" style={{margin: '0 0 10px'}}>Upload File</Button>\n    </Upload>\n    <br/>\n    <Upload shape=\"card\" style={{display: 'inline-block'}}>\n      Upload File\n    </Upload>\n    <Upload style={{display: 'inline', marginLeft: '5px'}}>\n      <div className=\"next-upload-card\">\n        <Icon type=\"attachment\" size=\"large\"/>\n        <div className=\"next-upload-text\">\n          Attachment\n        </div>\n      </div>\n    </Upload>\n  </div>\n)\n\nfunction beforeUpload(info) {\n  console.log('beforeUpload : ', info)\n}\n\nfunction onChange(info) {\n  console.log('onChange : ', info)\n}\n\nfunction onSuccess(info) {\n    console.log('onSuccess : ', info)\n}\n\nexport default Demo1","demoMeta.json":'{"entryPath":"src/demo/demo1.js"}'}}}]);
//# sourceMappingURL=387-9f10993e643450a92b78.js.map