(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{mPd2:function(n,e,t){"use strict";t.r(e),t.d(e,"demoMeta",(function(){return i})),t.d(e,"_demoSrcFiles",(function(){return l}));var o=t("mXGw"),a=t.n(o),r=t("BgHK"),c=function(n,e,t){console.log(n,e,t)};e.default=function(){var n=Object(o.useState)(function(){for(var n=[],e=0;e<5;e++)n.push({title:{name:"Quotation for 1PCS Nano "+(3+e)+".0 controller compatible"},id:100306660940+e,time:2e3+e});return n}()),e=n[0],t=n[1];return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(r.Button,{onClick:function(){var n=e.concat([{title:{name:"Quotation for 1PCS Nano controller compatible"},id:Date.now(),time:2e3}]);t(n)}},"Add Item")),a.a.createElement(r.Table,{dataSource:e,onRowClick:c},a.a.createElement(r.Table.Column,{title:"Id",dataIndex:"id"}),a.a.createElement(r.Table.Column,{title:"Title",dataIndex:"title.name"}),a.a.createElement(r.Table.Column,{title:"Time",dataIndex:"time"}),a.a.createElement(r.Table.Column,{cell:function(n,o,r){return a.a.createElement("a",{onClick:function(){return function(n){var o=-1;e.forEach((function(e,t){e.id===n&&(o=t)})),-1!==o&&(e.splice(o,1),t(e))}(r.id)}},"Remove(",r.id,")")},width:"20%"})))};var i={zhName:"增删改查",zhDesc:"演示对表格的增删改查"},l={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo9";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"src/styles.less":"","src/demo/demo9.js":'import React, { Component, useState } from \'react\'\nimport { Table, Button } from \'@alicloud/console-components\'\n\nconst onRowClick = function(record, index, e) {\n  console.log(record, index, e)\n}\n\nconst generateDataSource = () => {\n  const result = []\n  for (let i = 0; i < 5; i++) {\n    result.push({\n      title: {\n        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,\n      },\n      id: 100306660940 + i,\n      time: 2000 + i,\n    })\n  }\n  return result\n}\n\nconst Demo9 = () => {\n  const [dataSource, setDataSource] = useState(generateDataSource())\n  const onAdd = () => {\n    const newDataSource = dataSource.concat([\n      {\n        title: {\n          name: \'Quotation for 1PCS Nano controller compatible\',\n        },\n        id: Date.now(),\n        time: 2000,\n      },\n    ])\n    setDataSource(newDataSource)\n  }\n\n  const onRemove = id => {\n    let index = -1\n    dataSource.forEach((item, i) => {\n      if (item.id === id) {\n        index = i\n      }\n    })\n    if (index !== -1) {\n      dataSource.splice(index, 1)\n      setDataSource(dataSource)\n    }\n  }\n\n  const renderOper = (value, index, record) => {\n    return <a onClick={() => onRemove(record.id)}>Remove({record.id})</a>\n  }\n  return (\n    <div>\n      <p>\n        <Button onClick={onAdd}>Add Item</Button>\n      </p>\n      <Table dataSource={dataSource} onRowClick={onRowClick}>\n        <Table.Column title="Id" dataIndex="id" />\n        <Table.Column title="Title" dataIndex="title.name" />\n        <Table.Column title="Time" dataIndex="time" />\n        <Table.Column cell={renderOper} width="20%" />\n      </Table>\n    </div>\n  )\n}\n\nexport default Demo9\n\nexport const demoMeta = {\n  zhName: `增删改查`,\n  zhDesc: `演示对表格的增删改查`,\n}\n',"demoMeta.json":'{"entryPath":"src/demo/demo9.js"}'}}}]);
//# sourceMappingURL=350-e297da765fef5b3538df.js.map