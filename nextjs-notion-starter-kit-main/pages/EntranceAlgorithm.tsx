import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import Link from 'next/link'
import pageStyle from "../styles/indexPage.module.css"
import { IndexNavigator } from '@/components/IndexNavigator'

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

export default function EntranceAlgorithm(props) {
  return (
    <div>
      <div className={pageStyle.pageLayout}>
      {/* 네비게이션 */}
      <IndexNavigator />

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
        <Link href="/dac548a37b19429e8aa5ea7124aff2ba" className={pageStyle.linkBlock}>
          <a>
            <div className={pageStyle.linkBlockContainer}>
              <div className = {pageStyle.linkBlockText}>
                <text className = {pageStyle.linkBlockTitle}>운영체제</text>
                <text className = {pageStyle.linkBlockDescription}>운영체제에 대한 설명은 이렇게 길게 작성될 예정입니다.운영체제에 대한 설명은 이렇게 길게 작성될 예정입니다운영체제에 대한 설명은 이렇게 길게 작성될 예정입니다운영체제에 대한 설명은 이렇게 길게 작성될 예정입니다</text>
                <text className = {pageStyle.linkBlockShow}>운영체제 페이지로 이동 </text>
              </div>
              <img src="screenshot.png" className = {pageStyle.linkBlockImage} />
            </div>
          </a>
        </Link>
      </li>
      </div>
    </div>
  )

    return <NotionPage {...props} />
}