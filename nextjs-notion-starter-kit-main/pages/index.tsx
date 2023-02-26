import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import indexPageStyle from "../styles/indexPage.module.css"
import Link from 'next/link'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

// export default function NotionDomainPage(props) {
//   return <NotionPage {...props} />
// }

export default function NotionDomainPage(props) {
  return (
    <div>
      {/* 네비게이션 */}
      <div className="notion-header">
        <div className="notion-nav-header">
          <div>frist</div>
          <div>second</div>
          <div>third</div>
          <div>fourth</div>
          <div>fifth</div>
          <div>sixth</div>
        </div>
      </div>

      {/* 타이틀 이미지 */}
      <img src="titleImage.jpg" style={{width:"100%", height: "300px", "objectFit": "cover"}}></img>

      {/* 컨텐츠 메뉴 */}
      <div className={indexPageStyle.contetMenu}>
        <ul className={indexPageStyle.contentMenuList}>
          <Link href="/8c2ba592e9f946418c1dfa3406f94aa9">
            <a className={indexPageStyle.contentMenuListItem}>
              <text className={indexPageStyle.contentMenuListItemTitle}>알고리즘</text>
              <text className={indexPageStyle.contentMenuListItemSubtitle}>자료구조와 알고리즘 학습</text>
              <img className={indexPageStyle.contentMenuListItemImage} src="404.png"></img>
            </a>
          </Link>
          <Link href="/cs">
          <a className={indexPageStyle.contentMenuListItem}>
            <text className={indexPageStyle.contentMenuListItemTitle}>Computer Science</text>
            <text className={indexPageStyle.contentMenuListItemSubtitle}>컴퓨터 과학</text>
            <img className={indexPageStyle.contentMenuListItemImage} src="404.png"></img>
          </a>
          </Link>
        </ul>
        <ul className={indexPageStyle.contentMenuList}>
          <li className={indexPageStyle.contentMenuListItem}>
          <text className={indexPageStyle.contentMenuListItemTitle}>제목이 점점 길어져버리면</text>
            <text className={indexPageStyle.contentMenuListItemSubtitle}>부제목이 만약에 이렇게 길어져버리면 2줄까지 자동으로 만들어주겠지?</text>
            <img className={indexPageStyle.contentMenuListItemImage} src="404.png"></img>
          </li>
        </ul>
        <ul className={indexPageStyle.contentMenuList}>
          <li className={indexPageStyle.contentMenuListItem}>first</li>
          <li className={indexPageStyle.contentMenuListItem}>second</li>
        </ul>
      </div>

      {/* 푸터 */}
      <div className={indexPageStyle.footer}>
        {/* <div>footer</div> */}
      </div>
    </div>
  )

    return <NotionPage {...props} />
}