import Link from 'next/link'
import * as React from 'react'
import indexPageStyle from "../styles/indexPage.module.css"

export const ContentMenuItem = ({href, title, desc, imgSrc, bgColor, hzRatio}) => {
  return (
    <Link href={href}>
      <a className={indexPageStyle.contentMenuListItem} style={{backgroundColor: bgColor, flex: hzRatio}}>
          <text className={indexPageStyle.contentMenuListItemTitle}>{title}</text>
          <text className={indexPageStyle.contentMenuListItemSubtitle}>{desc}</text>
          <img className={indexPageStyle.contentMenuListItemImage} src={imgSrc}></img>
        </a>
    </Link>
  )
}
