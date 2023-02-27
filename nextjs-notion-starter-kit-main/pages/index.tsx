import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import indexPageStyle from "../styles/indexPage.module.css"

import { ContentMenuItem } from '@/components/contentMenuItem'

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
      <div style={{width: '100%', height: '100%', backgroundColor: 'white', opacity: 0.3}}></div>
        <div className="notion-nav-header">
          <div>frist</div>
          <div>second</div>
          <div>third</div>
          <div>fourth</div>
          <div>fifth</div>
          <div>sixth</div>
        </div>
      </div>
      
      <div style={{backgroundColor: "#111111"}}>

        {/* 타이틀 이미지 */}
        <img src="titleImage.jpg" style={{width:"100%", height: "300px", "objectFit": "cover"}}></img>

        {/* 컨텐츠 메뉴 */}
        <div className={indexPageStyle.contetMenu}>
          <ul className={indexPageStyle.contentMenuList}>
            <ContentMenuItem href="/8c2ba592e9f946418c1dfa3406f94aa9" title="알고리즘" desc="자료구조와 알고리즘 학습" imgSrc="404.png" bgColor="#46aa58" hzRatio="1"></ContentMenuItem>
            <ContentMenuItem href="/EntranceCS" title="Computer Science" desc="컴퓨터 과학" imgSrc="404.png" bgColor="#2C431E" hzRatio="1"></ContentMenuItem>
          </ul>
          <ul className={indexPageStyle.contentMenuList}>
            <ContentMenuItem href="/EntranceCS" title="iOS 개발" desc="부제목이 만약에 이렇게 길어져버리면 2줄까지 자동으로 만들어주겠지?" imgSrc="404.png" bgColor="#6F903A" hzRatio="1"></ContentMenuItem>
          </ul>
          <ul className={indexPageStyle.contentMenuList}>
            <ContentMenuItem href="/8c2ba592e9f946418c1dfa3406f94aa9" title="토이 프로젝트" desc="자료구조와 알고리즘 학습" imgSrc="404.png" bgColor="#31785B" hzRatio="1"></ContentMenuItem>
            <ContentMenuItem href="/EntranceCS" title="Computer Science" desc="노션 블로그 만들기" imgSrc="404.png" bgColor="#4B532B" hzRatio="1"></ContentMenuItem>
          </ul>
          <ul className={indexPageStyle.contentMenuList}>
            <ContentMenuItem href="/8c2ba592e9f946418c1dfa3406f94aa9" title="Retrospect" desc="회고합시다!" imgSrc="404.png" bgColor="#15534C" hzRatio="1"></ContentMenuItem>
            <ContentMenuItem href="/EntranceCS" title="About Me" desc="Who Am I...?" imgSrc="404.png" bgColor="#FFa105" hzRatio="3"></ContentMenuItem>
          </ul>
        </div>

        {/* 푸터 */}
        <div className={indexPageStyle.footer}>
            {/* <div>footer</div> */}
          </div>
        </div>
      </div>
  )

    return <NotionPage {...props} />
}