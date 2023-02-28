// import Link from 'next/link'
import Link from 'next/link'
import * as React from 'react'

export const IndexNavigator = () => {
  return (
    <div className="notion-header">
      <div style={{width: '100%', height: '100%', backgroundColor: "black", opacity: 0.4}}></div>
        <div className="notion-nav-header">
          <Link href="/">
            <a style={styles.text}>Home</a>
          </Link>
          
          <Link href="/EntranceAlgorithm">
            <a style={styles.text}>Algorithm</a>
          </Link>

          <Link href="/EntranceCS">
            <a style={styles.text}>CS</a>
          </Link>
          <Link href="/EntranceApple">
            <a style={styles.text}>Apple Ecosystem</a>
          </Link>
          <Link href="/EntranceToy">
            <a style={styles.text}>Toy Project</a>
          </Link>
          <Link href="/EntranceAboutme">
            <a style={styles.text}>About Me</a>
          </Link>
        </div>
      </div>
  )
}

const styles = {
  text: {
    color: "white",
    fontWeight: "bold",
  },
};