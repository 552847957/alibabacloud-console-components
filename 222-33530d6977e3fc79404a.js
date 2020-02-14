(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{ArPa:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i})),t.d(e,"_demoSrcFiles",(function(){return a}));var o=t("mXGw"),s=t.n(o),r=t("BgHK");t("gAC5");var i=function(n){var e,t;function o(e){var t;return(t=n.call(this,e)||this).onClick=function(){t.setState({visible:!t.state.visible})},t.onClose=function(){t.setState({visible:!1})},t.state={visible:!1},t}return t=n,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,o.prototype.render=function(){var n=this;return s.a.createElement("div",null,s.a.createElement("button",{onClick:this.onClick,ref:function(e){n.btn=e}},"Toggle visible"),s.a.createElement(r.Overlay,{visible:this.state.visible,target:function(){return n.btn},safeNode:function(){return n.btn},onRequestClose:this.onClose},s.a.createElement("span",{className:"overlay-demo"},"Hello World From Overlay!")))},o}(s.a.Component),a={"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo1";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo1.js":"import React from 'react'\nimport { Overlay } from '@alicloud/console-components'\nimport './demo1.less'\n\nexport default class Demo1 extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false\n    }\n  }\n\n  onClick = () => {\n    this.setState({\n      visible: !this.state.visible\n    })\n  }\n\n  onClose = () => {\n    this.setState({\n      visible: false\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.onClick} ref={ref => {\n          this.btn = ref;\n        }}>\n          Toggle visible\n        </button>\n        <Overlay visible={this.state.visible}\n          target={() => this.btn}\n          safeNode={() => this.btn}\n          onRequestClose={this.onClose}>\n          <span className=\"overlay-demo\">\n            Hello World From Overlay!\n          </span>\n        </Overlay>\n      </div>\n    )\n  }\n}\n","src/demo/demo1.less":".overlay-demo {\n    width: 300px;\n    height: 100px;\n    padding: 10px;\n    border: 1px solid #999999;\n    background: #FFFFFF;\n    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);\n}","demoMeta.json":'{"entryPath":"src/demo/demo1.js"}'}}}]);
//# sourceMappingURL=222-33530d6977e3fc79404a.js.map