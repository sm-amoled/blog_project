import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
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

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />
}

// export default function NotionDomainPage() {
//   return (
//     <div>
//       <div className="notion-header">
//         <div className="notion-nav-header">Titles</div>
//       </div>
//       <div>Hello, World!</div>
//     </div>
//   )
// }