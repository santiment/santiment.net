import React from 'react'
import cx from 'classnames'
import styles from './TrustedBlock.module.scss'

import binance from './logos/binance.svg'
import bloomberg from './logos/bloomberg.svg'
import ethereum from './logos/ethereum.svg'
import cnn from './logos/cnn.svg'
import coindesk from './logos/coindesk.svg'
import cointelegraph from './logos/cointelegraph.svg'
import nasdaq from './logos/nasdaq.svg'
import ripple from './logos/ripple.svg'
import wired from './logos/wired.svg'
import bitcoinMagazine from './logos/bitcoin-magazine.svg'
import bitfinex from './logos/bitfinex.svg'
import cardano from './logos/cardano.svg'
import kraken from './logos/kraken.svg'
import kucoin from './logos/kucoin.svg'
import maker from './logos/maker.svg'

const logos = {
  binance,
  bloomberg,
  ethereum,
  cnn,
  coindesk,
  cointelegraph,
  nasdaq,
  ripple,
  bitcoinMagazine,
  wired,
  bitfinex,
  cardano,
  kraken,
  kucoin,
  maker,
}

const TrustedBlock = () => {
  const marquee = (
    <span className={cx(styles.marquee, 'row hv-center')}>
      {Object.entries(logos).map(([name, logo]) => {
        return <img className={cx(styles.logo, 'mrg-xxl mrg--l')} src={logo} alt={`${name} logo`} />
      })}
    </span>
  )

  return (
    <div className={cx(styles.wrapper)}>
      <h3 className={cx(styles.title, 'row v-center body-1 mrg-xl mrg--b')}>
        <div className={cx(styles.dot)} />
        As seen on
        <div className={cx(styles.dot)} />
      </h3>
      <div className={cx(styles.wrapper, 'row v-center')}>
        {marquee}
        {marquee}
      </div>
    </div>
  )
}

export default TrustedBlock
