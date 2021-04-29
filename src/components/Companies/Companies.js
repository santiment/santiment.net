import React from 'react'
import Heading from '../Heading/Heading'
import BloomberImg from './bloomberg.png'
import ForbesImg from './forbes.png'
import CoindeskImg from './coindesk.png'
import CoinTelegraphImg from './cointelegraph.png'
import CryptoBrImg from './cb.png'
import BitcoinImg from './bitcoin.png'
import styles from './Companies.module.scss'

const Companies = () => {
  return (
    <div className={styles.container}>
      <Heading className={styles.header}>
          As referenced in major publications
      </Heading>
      <div className={styles.list}>
        <img alt='bloomberg' src={BloomberImg} width="217"  />
        <img alt='forbes' src={ForbesImg} width="163" />
        <img alt='coindesk' src={CoindeskImg} width="205"  />
        <img alt='cointelegraph' src={CoinTelegraphImg} width="258"  />
        <img alt='cryptobriefing' src={CryptoBrImg} width="148"  />
        <img alt='bitcoin' src={BitcoinImg} width="255"  />
      </div>
    </div>
  )
}

export default Companies
