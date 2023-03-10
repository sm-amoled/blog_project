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

export default function EntranceCS(props) {
  return (
    <div className={pageStyle.pageBackground}>
      <IndexNavigator />
      <div className={pageStyle.pageLayout}>

      {/* 타이틀 */}
      <div className={pageStyle.titleBlock}>
        <div className={pageStyle.title}>
            컴퓨터 과학 & 공학
        </div>
        <div className={pageStyle.description}>
          <p>컴퓨터 과학과 컴퓨터 공학은 현대 사회에서 사람이 수행하는 거의 대부분의 활동에 기초가 되는 정보처리에 대해 연구하며, 현실을 가상세계로 확장시켜 불가능을 가능케하는 학문입니다.</p>
          <p>망원경을 고도로 개발하여 우주를 더욱 선명하고 정확하게 이해하려는 천문학처럼, 컴퓨터 과학과 컴퓨터 공학은 컴퓨터의 발전을 통해 세상을 더욱 풍성하게 이해하고 풍요로운 미래로 우리를 이끌어갑니다.</p>
          <p>함께 공부해요!</p>
          </div>
        <img src="EntranceImages/computer-science.jpg" className={pageStyle.image}>
          
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