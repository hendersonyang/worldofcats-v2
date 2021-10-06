import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import cards from './cards.json'
import { Tooltip, IconButton, CircularProgress } from '@material-ui/core'
import { Reddit, Chat, Forum, Telegram } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles((theme) => ({
  i: {
    color: "white"
  }
}));

export default function Home() {
  const s = Styles()
  useEffect(() => {
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
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none'
      document.getElementById('container').style.display = 'initial'
    }, 3000)
    console.log(cards)
  }, [])
  return (
    <div>

      <Head>
        <title>World Of Cats</title>
        <meta charset="UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:color" content="#3b96d9" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="World Of Cats" />
        <meta property="og:title" content="Cat Themed NFTs" />
        <meta name="title" content="Cat Themed NFTs" />
        <meta property="twitter:title" content="Cat Themed NFTs" />
        <meta property="og:description" content="Check out our cat-themed NFT series." />
        <meta property="twitter:description" content="Check out our cat-themed NFT series." />
        <meta name="description" content="Check out our cat-themed NFT series." />
        <link rel="icon" href="https://emojicdn.elk.sh/😺?style=twitter" />
      </Head>
      <div id="loading">
        <center>
          <CircularProgress className={s.i} style={{ margin: '5%' }} />
          <h2 id="loadingtext">Minting cats...</h2>
        </center>
      </div>
      <div id="container" style={{ display: 'none' }}>
        <h1><span className="blue"><noscript>Cute</noscript></span> 😺 themed NFTs.</h1>
        {/*<div className="grid">*/}
        <Tooltip title="Discord">
          <IconButton href="https://discord.gg/jUmExFss9j" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <Forum />
          </IconButton>
        </Tooltip>
        <Tooltip title="Subreddit">
          <IconButton href="https://www.reddit.com/r/worldsofcats" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <Reddit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Telegram">
          <IconButton href="https://t.me/worldsofcats" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <Telegram />
          </IconButton>
        </Tooltip>
        {/*</div>*/}
        <h2>EXPLORE ALL NFTS</h2>
        <div className="grid">
          {cards.nfts.map((i, b) => (
            <Tooltip key={i.key} title={i.tooltip || i.title}>
              <a className="card" style={{ cursor: 'pointer' }} href={i.href} target="_blank" rel="noreferrer"
                key={i.key.toString()}>
                <img src={i.image} width="200px" />
                <h2>{i.name}<br/>Card #{i.id}</h2>
              </a>
            </Tooltip>
          ))}
        </div>
        <br/>
        <footer>© 2021 All Rights Reserved | Henderson Y.<br/>Inquiries: nfts@magicalcat.xyz</footer>
      </div>
    </div>
  )
}

