(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{SjKM:function(e,n,t){"use strict";t.r(n),t.d(n,"_demoSrcFiles",(function(){return s}));var o=t("mXGw"),a=t.n(o),r=t("BgHK");var l=r.Collapse.Panel,i=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).onExpand=function(e){t.setState({expandedKeys:e})},t.state={expandedKeys:[]},t}t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var i=o.prototype;return i.onClick=function(e){console.log(this),console.log("clicked",e)},i.render=function(){return a.a.createElement(r.Collapse,{onExpand:this.onExpand,expandedKeys:this.state.expandedKeys},a.a.createElement(l,{title:"simple tile",onClick:this.onClick},a.a.createElement("ul",null,a.a.createElement("li",null,"Promotions are marketing campaigns ran by Marketplace"),a.a.createElement("li",null,"Participate to sale your products during that promotion and make a profit"))),a.a.createElement(l,{title:"What are Promotion Products?"},a.a.createElement("ul",null,a.a.createElement("li",null,"Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range"),a.a.createElement("li",null,"You can choose which products should be available for the promotion"),a.a.createElement("li",null,"Not all Products of you will be available, because Promotions will only attract certain Product areas"))),a.a.createElement(l,{title:"Why can i not submit a higher price?"},a.a.createElement("ul",null,a.a.createElement("li",null,"The Promotion requires a certain price to make sure that our customers are attracted"))),a.a.createElement(l,{title:"What is Promo Stock?"},"Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active."))},o}(o.Component);n.default=i;var s={"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo5";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"",".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"src/demo/demo5.js":'import React, { Component } from \'react\'\nimport { Collapse } from \'@alicloud/console-components\'\n\nconst Panel = Collapse.Panel\n\nclass Demo5 extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      expandedKeys: []\n    }\n  }\n\n  onExpand = (expandedKeys) => {\n    this.setState({\n      expandedKeys\n    })\n  }\n\n  onClick(key) {\n    console.log(this)\n    console.log(\'clicked\', key)\n  }\n\n  render() {\n    return (\n      <Collapse onExpand={this.onExpand} expandedKeys={this.state.expandedKeys} >\n        <Panel title="simple tile" onClick={this.onClick}>\n          <ul>\n            <li>Promotions are marketing campaigns ran by Marketplace</li>\n            <li>Participate to sale your products during that promotion and make a profit</li>\n          </ul>\n        </Panel>\n        <Panel title="What are Promotion Products?">\n          <ul>\n            <li>Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range</li>\n            <li>You can choose which products should be available for the promotion</li>\n            <li>Not all Products of you will be available, because Promotions will only attract certain Product areas</li>\n          </ul>\n        </Panel>\n        <Panel title="Why can i not submit a higher price?">\n          <ul>\n            <li>The Promotion requires a certain price to make sure that our customers are attracted</li>\n          </ul>\n        </Panel>\n        <Panel title="What is Promo Stock?">\n          Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.\n        </Panel>\n      </Collapse>\n    )\n  }\n}\n\nexport default Demo5',"demoMeta.json":'{"entryPath":"src/demo/demo5.js"}'}}}]);
//# sourceMappingURL=99-3a3edec730ce43626890.js.map