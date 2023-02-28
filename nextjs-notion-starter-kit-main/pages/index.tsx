import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import indexPageStyle from "../styles/indexPage.module.css"

import { ContentMenuItem } from '@/components/ContentMenuItem'
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

export default function NotionDomainPage(props) {
  return (
    <div>
      <div style={{backgroundColor: "#111111"}}>

        {/* 네비게이션 */}
        <IndexNavigator />

        {/* 타이틀 이미지 */}
        <img src="titleImage.jpg" style={{width:"100%", height: "300px", "objectFit": "cover"}}></img>

        {/* 컨텐츠 메뉴 */}
        <div className={indexPageStyle.contetMenu}>
          <ul className={indexPageStyle.contentMenuList}>
            <ContentMenuItem href="/EntranceAlgorithm" title="알고리즘" desc="자료구조와 알고리즘 학습" imgSrc="404.png" bgColor="#46aa58" hzRatio="1"></ContentMenuItem>
            <ContentMenuItem href="/EntranceCS" title="Computer Science" desc="컴퓨터 과학" imgSrc="404.png" bgColor="#2C431E" hzRatio="1"></ContentMenuItem>
          </ul>
          <ul className={indexPageStyle.contentMenuList}>
            <ContentMenuItem href="/EntranceApple" title="Apple Ecosystem" desc="부제목이 만약에 이렇게 길어져버리면 2줄까지 자동으로 만들어주겠지?" imgSrc="404.png" bgColor="#6F903A" hzRatio="1"></ContentMenuItem>
          </ul>
          <ul className={indexPageStyle.contentMenuList}>
            <ContentMenuItem href="/EntranceToy" title="토이 프로젝트" desc="자료구조와 알고리즘 학습" imgSrc="404.png" bgColor="#31785B" hzRatio="1"></ContentMenuItem>
            <ContentMenuItem href="/0068d4e9d1d34eeda33bb88da304895a" title="노션 블로그 만들기" desc="노션 블로그 만들기" imgSrc="404.png" bgColor="#4B532B" hzRatio="1"></ContentMenuItem>
          </ul>
          <ul className={indexPageStyle.contentMenuList}>
            <ContentMenuItem href="/retrospect-5cebb8de22334ba2aff0d66dc8c6d8b2" title="Retrospect" desc="회고합시다!" imgSrc="404.png" bgColor="#15534C" hzRatio="1"></ContentMenuItem>
            <ContentMenuItem href="/EntranceAboutme" title="About Me" desc="Who Am I...?" imgSrc="404.png" bgColor="#564026" hzRatio="3"></ContentMenuItem>
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

/*
알고리즘
http://localhost:3000/8c2ba592e9f946418c1dfa3406f94aa9
자구 알고 정리
http://localhost:3000/176227a3c51d45f49d48ee8aa28f9f25
문제풀이 정리
http://localhost:3000/5ebf6126a91c4b319b5e9b44a6e15b40

CS

Ecosystem
http://localhost:3000/apple-ecosystem-38333a5b48514e6cafb849f6f8896d0f
iOS
http://localhost:3000/ios-273a11b915e84fda9c7bf0dc374b2b8c
watchOS
http://localhost:3000/watchos-13503851abd74a2eae43c26990fb15a0
Swift
http://localhost:3000/swift-f1e3bd96c33b4863ae7ad1ddfba3cad5

회고
http://localhost:3000/retrospect-5cebb8de22334ba2aff0d66dc8c6d8b2

About me
http://localhost:3000/about-me-76ad7a0385734182b325aad3eb205609

토이프로젝트
http://localhost:3000/ed81a7ca23d84793ad334fa2e2458f15

블로그 제작기
http://localhost:3000/0068d4e9d1d34eeda33bb88da304895a
*/