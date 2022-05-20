import React from 'react'
import tbn from './logos/TBN.svg'
import bloomberg from './logos/bloomberg.svg'
import bitfinex from './logos/bitfinex.svg'
import cointelegraph from './logos/cointelegraph.svg'
import styles from './TrustedBlock.module.scss'

const TrustedBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <div className={styles.dot} />
      Trusted by
      <div className={styles.dot} />
    </div>
    <div className={styles.row}>
      <img src={tbn} alt='TBN' className={styles.tbn} />
      <img src={bloomberg} alt='Bloomberg' className={styles.bloomberg} />
      <img src={bitfinex} alt='Bitfinex' className={styles.bitfinex} />
      <img
        src={cointelegraph}
        alt='Cointelegraph'
        className={styles.cointelegraph}
      />
    </div>
  </div>
)

export default TrustedBlock
