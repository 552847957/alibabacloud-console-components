import React, { useMemo } from 'react'
import AppLayout from '@alicloud/console-components-app-layout'
import '@alicloud/console-components/dist/wind.css'
import styled from 'styled-components'
import TopBar, { TOP_BAR_HEIGHT } from './TopBar'
import SideBar from './SideBar'
import MarkdownContent from './MarkdownContent'
import { pageCtx } from './context'
import NotFound from './pages/404'
import IndexPage from './pages/indexPage'
import SEO from '../SEO'
import DynamicDoc from './DynamicDoc'
import DocPreview from './DocPreview'
import { buildTagIndex, ITagIndex } from './utils/buildTagIndex'
import { useSearchPages } from './SearchPages'

export interface IDocPageMeta {
  // 是普通文档还是404页面
  type: 'doc' | 'dynamic-doc'
  /**
   * 文章名称， kebab-case
   * https://lodash.com/docs/4.17.15#kebabCase
   * 从 frontmatter 获得
   */
  name: string
  /**
   * 文章名称，中文
   * 从 frontmatter 获得
   */
  zhName: string
  /**
   * 文章类别
   * 从 frontmatter 获得
   */
  category: string
  /** url路径 */
  path: string
  /**
   * 文章在左侧导航栏的排序，按照[sort, name]来排序
   * 从 frontmatter 获得(用户可不填，默认为1)
   */
  sort?: number
  /**
   * 文章在菜单中的显示文字
   */
  labelInMenu?: string
  /** 左侧导航菜单的配置 */
  sideNav: {
    /** 左侧导航菜单的标题 */
    header: string
    /** 左侧导航菜单的导航内容 */
    navCategories: {
      categoryName?: string
      tagSelector?: any
      label?: string
      flat?: boolean
      sortByTag?: string
    }[]
  }
  tags?: { [tagName: string]: string }
}

export interface IStaticDocMeta extends IDocPageMeta {
  type: 'doc'
  mdxBody: string
  // 文档md文件的路径（相对于contentRootDir）
  markdownFilePath: string
  // url路径
  path: string
}
export interface IDynamicDocMeta extends IDocPageMeta {
  type: 'dynamic-doc'
  /**
   * 文档资源加载地址：
   * https://www.unpkg.com/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/_doc.system.js
   * 或者
   * https://cdn.jsdelivr.net/npm/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/_doc.system.js
   *
   * 其中，文档demo对prodPkgName的依赖被重定向到actualLoadPkgName
   */
  prodPkgName: string
  actualLoadPkgName?: string
  actualLoadPkgVersion?: string
}

export type INormalPageMeta = IStaticDocMeta | IDynamicDocMeta

export type IPageMeta =
  | INormalPageMeta
  | { type: '404' }
  | { type: 'index-page' }
  | { type: 'doc-preview' }

export interface ISiteMeta {
  categories: {
    name: string
    zhName: string
    docs: INormalPageMeta[]
  }[]
  topNav: { text: string; href: string }[]
  // 入口路径
  primaryPath: string
  // 标题模板为 pageName · siteName
  siteName: string
  // 应用描述
  description?: string
}

export interface IPageContext {
  pageMeta: IPageMeta
  siteMeta: ISiteMeta
  tagIndex: ITagIndex
}

const SiteLayout: React.FC<{ pageContext: IPageContext }> = props => {
  const { pageContext: pageContext0 } = props

  const pageContext = useMemo(
    () => ({
      ...pageContext0,
      tagIndex: buildTagIndex(pageContext0.siteMeta.categories),
    }),
    [pageContext0]
  )
  const wrap = useSearchPages(pageContext.siteMeta.categories)

  // 切换文档时，强制重刷，不要复用vdom。否则上一页的dom node滚动状态会影响到下一页的autopadding
  const vDomKey = (() => {
    switch (pageContext.pageMeta.type) {
      case 'doc':
      case 'dynamic-doc':
        return pageContext.pageMeta.path
      case 'doc-preview':
        return typeof window === 'undefined'
          ? 'doc-preview'
          : window.location.href
      default:
        return pageContext.pageMeta.type
    }
  })()

  return wrap(
    <pageCtx.Provider value={pageContext}>
      <SEO />
      <TopBar />
      <SAppLayout
        nav={'sideNav' in pageContext.pageMeta ? <SideBar /> : undefined}
        adjustHeight={TOP_BAR_HEIGHT}
        navCollapsible={false}
      >
        <ScScrollCtn key={vDomKey}>
          <ScContentCtn>
            {(() => {
              if (pageContext.pageMeta.type === 'doc') {
                return <MarkdownContent />
              }
              if (pageContext.pageMeta.type === 'dynamic-doc') {
                return <DynamicDoc />
              }
              if (pageContext.pageMeta.type === 'index-page') {
                return <IndexPage />
              }
              if (pageContext.pageMeta.type === 'doc-preview') {
                return <DocPreview />
              }
              return <NotFound />
            })()}
          </ScContentCtn>
        </ScScrollCtn>
      </SAppLayout>
    </pageCtx.Provider>
  )
}

export default SiteLayout

const SAppLayout = styled(AppLayout)`
  .windcc-app-layout__nav {
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #dedede;
    }

    ::-webkit-scrollbar-thumb {
      background: #666;
    }
  }
`

const ScScrollCtn = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

const ScContentCtn = styled.div`
  padding: 16px 24px 0;
`
