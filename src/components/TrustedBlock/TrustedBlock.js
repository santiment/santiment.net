import React from 'react'
import tbn from './logos/TBN.svg'
import bloomberg from './logos/bloomberg.svg'
import bitfinex from './logos/bitfinex.svg'
import cointelegraph from './logos/cointelegraph.svg'
import styles from './TrustedBlock.module.scss'

const TrustedBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.dot} />
        Trusted by
        <div className={styles.dot} />
      </div>
      <div className={styles.row}>
        <img src={tbn} alt='TBN' />
        <img src={bloomberg} alt='Bloomberg' />
        <img src={bitfinex} alt='Bitfinex' />
        <img src={cointelegraph} alt='Cointelegraph' />
      </div>
    </div>
  )
}

export default TrustedBlock
