import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import Link from 'next/link'
import pageStyle from "../styles/indexPage.module.css"
// import Link from 'next/link'

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

export default function cs(props) {
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

<div className={pageStyle.pageLayout}>
      {/* 타이틀 */}
      <div className={pageStyle.titleBlock}>
        <div className={pageStyle.title}>
            오늘의 제목
        </div>
        <div className={pageStyle.description}>
        오늘의 설명은 이렇게 길게 작성될 예정입니다.오늘의 설명은 이렇게 길게 작성될 예정입니다.오늘의 설명은 이렇게 길게 작성될 예정입니다.오늘의 설명은 이렇게 길게 작성될 예정입니다.오늘의 설명은 이렇게 길게 작성될 예정입니다.
        </div>
        <img src="screenshot.png" className={pageStyle.image}>
          
        </img>
      </div>

      {/* 링크 */}
      <li className={pageStyle.linkList}>
        <Link href="/">
          <a className={pageStyle.linkBlock}>
            <div className={pageStyle.linkBlockContainer}>
              <div className = {pageStyle.linkBlockText}>
                <text className = {pageStyle.linkBlockTitle}>제목</text>
                <text className = {pageStyle.linkBlockDescription}>설명</text>
              </div>
              <img src="404.png" className = {pageStyle.linkBlockImage} />
            </div>
          </a>
        </Link>
      </li>
      </div>
    </div>
  )

    return <NotionPage {...props} />
}