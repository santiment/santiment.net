import React from 'react'
import Heading from '../Heading/Heading'
import BloomberImg from './bloomberg.svg'
import ForbesImg from './forbes.svg'
import CoindeskImg from './coindesk.svg'
import CoinTelegraphImg from './cointelegraph.svg'
import CryptoBrImg from './crypto-briefing.svg'
import BitcoinImg from './bitcoin.svg'
import styles from './Companies.module.scss'

const Companies = () => {
  return (
    <div className={styles.container}>
      <Heading className={styles.header}>
        Big companies that referenced our data
      </Heading>
      <div className={styles.list}>
        <img alt='bloomberg' src={BloomberImg} />
        <img alt='forbes' src={ForbesImg} />
        <img alt='coindesk' src={CoindeskImg} />
        <img alt='cointelegraph' src={CoinTelegraphImg} />
        <img alt='cryptobriefing' src={CryptoBrImg} />
        <img alt='bitcoin' src={BitcoinImg} />
      </div>
    </div>
  )
}

export default Companies
