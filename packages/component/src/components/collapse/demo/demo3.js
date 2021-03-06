import React from 'react'
import { Collapse } from '@alicloud/console-components'

const Panel = Collapse.Panel

const list = [
  {
    title: '宋词范例',
    content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。'   
  },
  {
    title: '唐诗范例',
    content: '锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。',
    expanded: true
  },
  {
    title: '现代诗范例',
    content: '轻轻的我走了，正如我轻轻的来；我轻轻的招手，作别西天的云彩。'
    
  },
  {
    title: '网络词汇',
    content: ' 洪荒之力。萌萌哒。带我上黄金，带我装逼带我飞。扎心了老铁'
  },
]

const Demo3 = () => (
  <div>
    <Collapse accordion dataSource={list} defaultExpandedKeys={["2"]} />
    <br/><br/>
    <Collapse dataSource={list} defaultExpandedKeys={["0", "2"]} />
  </div>
)

export default Demo3
