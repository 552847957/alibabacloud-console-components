# @alicloud/gatsby-theme-console-doc

这是一个 gatsby 的 [theme](https://www.gatsbyjs.org/docs/themes/)，用于生成文档站点。它已经做了抽象，可以用于生成通用的文档站点，不仅限于 console-components。

> 事实上，它已经被用于[其他文档站点](https://aliyun.github.io/alibabacloud-console-chart/guides/quick-start)的生成。

## 如何使用

[这个目录](https://github.com/aliyun/alibabacloud-console-components/tree/master/demo-workspaces/gatsby-theme-console-doc-template)是一个最小的使用示例项目。其中的[gatsby-config.js 配置文件](https://github.com/aliyun/alibabacloud-console-components/tree/master/demo-workspaces/gatsby-theme-console-doc-template/site/gatsby-config.js)包含了详细配置示例和说明。

## 站点能力

- 继承自 gatsby 的高性能：SSR、prefetching
- 规范的站点布局，清爽的样式风格
- 类 github 风格的 markdown 渲染样式
- 自动生成搜索功能，所有文档都是可搜索的，开箱即用
- 文档标签。并且可以通过标签来搜索文档、向用户推荐其他文档。标签还用于编排左侧导航栏
- 可编排的左侧导航栏
- 动态加载文档。动态文档更新后，文档站点无需重新构建发布

以及文档粒度的优化扩展：

- 在 markdown 中嵌入本地的图片。图片会被自动优化
- 可在文档中嵌入 demo，并自动生成“在 codesandbox 打开”的功能
- 可在文档中渲染来自源码的 typescript interface（渲染成一个表格），作为 API 文档，并提取注释作为 API 描述。避免手动将 API 维护在 markdown 中，造成文档腐化
- 自动生成标题跳转锚点、文档目录结构

有关文档粒度的优化扩展的详细说明，请查看 👉[文档特性](./doc-features)。本文档只阐述跨文档的、站点粒度的重要特性。

## 文档搜索

使用者在使用`@alicloud/gatsby-theme-console-doc`搭建文档站点的时候，需要通过配置的方式来告诉文档框架：有哪些文档、他们放在哪里、文档的名称、url 路径、文档标签等，这些数据是文档的元数据（描述文档，但不包含文档内容本身）。
文档站点在构建时会收集所有文档的元数据。这些数据会被用来作为搜索的数据。

文档搜索会根据名称和标签键值来搜索:

- 搜索词`democ`会匹配到名称为`rc-demo-component`的文档
- 搜索词`组件`会匹配到中文名称为`组件1`的文档
- 搜索词`basec`会匹配到包含标签`baseComp`的文档
- 搜索词`test:val`会匹配到包含标签`testTag2:tagVal2`的文档

## 文档标签

### 背景

过去，文档框架对文档进行分类的指标只有一个：category 类别。一个类别就相当于一个桶，每篇文档只能放在一个桶里面。

> 因为我们拼接文档 url 的规范：`/<category>/<文档名称>`，所以每篇文档注定只能有一种 category

这种单一的分类维度，对文档的关联和分类造成了困难。比如，console-components 过去只有两种 category：基础组件和业务组件。这种分类无法体现组件之间**在功能上的关联性**。比如，`Button`和`MenuButton`都属于基础组件，然而基础组件多达 50 个，**文档站点对这 50 个基础组件一视同仁，没能体现这两个组件之间的密切相似性，给用户的学习和查找造成了困难**。

这两种组件实际上在功能上是非常相关的：都是一种“button”。**如果我们的文档站点能够体现这种关联性，那么用户在阅读文档的时候，能够很快地找到与此相关的文档，一并学习和比较。**

为此，文档框架支持 tag 的关联模式，将文档通过 tag 关联起来以后，**相关的文档能够靠近展示、相互引荐，用户不再看到一个个孤立的组件，而是一个个族群**。

### 功能设计

- tag 本质上是 attach 在文档实体上的 key:value 对（可以省略 value，等价于 key:true）。
- 每篇文档可以 attach 任意多个 tag（key:value 对）。
- tag 是站点对于文档的分类与编排，同一篇文档在不同的站点可能有不同的 tag，因此 tag 信息不属于文档本身（不应该在文档开头标注 tag），而是属于站点的一种配置。
- 文档站点要拿到所有文档的 tag 信息，才能渲染左侧导航栏、激活搜索功能。因此 tag 信息处于站点渲染的关键路径上。我们应该将这些信息打包到首屏 bundle。

### 功能 1：帮助阅读者理解文档关系

标签会展示在文档顶部，提示文档内容的关键信息。

![tag hint](./assets/tag1.png '文档标签标注')

点击文档顶部的标签，能立即看到相同标签的其他文档，便于用户做分类、学习、比较；

![tag search](./assets/tag2.png '搜索相同标签的文档')

后续我们会在文档右下角推荐标签相同的其他文档，帮助读者快速触达相关的文档。

### 功能 2：帮助开发者编排菜单

开发者在配置文档站点时，可以通过标签来编排左侧导航菜单。
以下示例来自[示例项目](https://github.com/aliyun/alibabacloud-console-components/tree/master/demo-workspaces/gatsby-theme-console-doc-template/site/gatsby-config.js)，通过标签来选中若干文档，然后将它们放在菜单中相邻的位置。

```js
// 左侧导航栏编排
const navCategories = (() => {
  switch (pageMeta.category) {
    // 根据当前页面的信息，来决定左侧导航栏应该展示哪些导航项
    case 'components':
      // 如果当前页面是组件
      // 则导航栏需要导航这下面选中的文档：
      return [
        {
          // 选中那些具有tag"自定义类目1"的文档
          tagSelector: {
            自定义类目1: true, // true匹配任何tagValue
            // 自定义类目1: 'myvalue',  // 只匹配具有tag"自定义类目1:myvalue"的文档
          },
          // 将选中的文档直接放在menu中，还是放在一个可展开/收起的SubMenu中
          flat: true,
          /**
           * 根据文档的tag值来排序。没有对应tag的文档，优先级默认为1。
           * 例子：
           * 文档1有tag：_自定义类目sort:2,
           * 文档2有tag：_自定义类目sort:0,
           * 文档3没有tag。
           * 那么在导航菜单中的顺序为[文档2，文档3，文档1]
           */
          sortByTag: '_自定义类目sort',
        },
        {
          tagSelector: {
            baseComp: true,
          },
          // 将选中的文档放在一个SubMenu中，可以指定这个SubMenu的label
          // 仅当flat不为true时有效
          label: '基础组件',
        },
      ]
    case 'guides':
      // 也可以选中指定category的文档
      return [{ categoryName: 'guides' }]
    default:
      throw new Error(`unexpected pageMeta.category ${pageMeta.category}`)
  }
})()
```

得到的导航菜单如下：
![nav-menu](./assets/nav-menu.png '导航菜单编排')

未来允许开发者通过标签来编排站点目录（站点地图）。

## 动态加载文档
