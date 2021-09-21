import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() =>{
    const Typed = require('typed.js')
    var i = new Typed(".blue", {
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      strings: [
          "Cute",
          "Cute",
          "Adorable",
          "Sweet",
          "Cool"
      ],
      loop: true
  })
  },[])
  return (
    <div className={styles.container}>

<Head>
    <title>World Of Cats</title>
    <meta charset="UTF-8" />
    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:site_name" content="World Of Cats" />
    <meta property="og:title" content="Cat Themed NFTs" />
    <meta name="title" content="Cat Themed NFTs" />
    <meta property="twitter:title" content="Cat Themed NFTs" />
    <meta property="og:description" content="Check out our cat-themed NFT series." />
    <meta property="twitter:description" content="Check out our cat-themed NFT series." />
    <meta name="description" content="Check out our cat-themed NFT series." />
</Head>

<body>
    <h1><span className="blue"><noscript>Cute</noscript></span> 😺 themed NFTs.</h1>
    <h2>EXPLORE ALL NFTS</h2>
    <div className="grid">
        <a href="https://wax.atomichub.io/market?collection_name=worldsofcats&schema_name=cats&template_id=290697"
            className="card" target="_blank">
            <img src="https://i.imgur.com/PG1L2ZL.png" width="200px" />
            <h2>Card #1 Magical Cat</h2>
        </a>
        <a href="https://wax.atomichub.io/market?collection_name=worldsofcats&schema_name=cats&template_id=290697"
            className="card" target="_blank">
            <img src="https://i.imgur.com/PG1L2ZL.png" width="200px" />
            <h2>Another one?</h2>
        </a>
        <a href="https://wax.atomichub.io/market?collection_name=worldsofcats&schema_name=cats&template_id=290697"
            className="card" target="_blank">
            <img src="https://i.imgur.com/PG1L2ZL.png" width="200px" />
            <h2>The same one again</h2>
        </a>
    </div>
</body>
    </div>
  )
}
