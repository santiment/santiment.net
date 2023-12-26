import React from 'react'
import cx from 'classnames'
import styles from './MainNumbers.module.scss'
import rocket from './images/rocket.svg'
import coin from './images/coin.svg'
import bulb from './images/bulb.svg'
import cube from './images/cube.svg'

const numbers = [
  {
    title: '#1',
    img: coin,
    description: 'Since 2017, pioneering analytics of the crypto development data',
  },
  {
    title: '#1',
    img: rocket,
    description: 'In sentiment crypto metrics, leading the market since 2014',
  },
  {
    title: '2009',
    img: bulb,
    description:
      "We've been gathering historical data so you can look back and backtest your strategy",
  },
  {
    title: '12',
    img: cube,
    description:
      'Blockchains and 2000+ assets, we offer 1000+ on-chain metrics for comprehensive analysis',
  },
]

const MainNumbers = () => {
  return (
    <div className={cx(styles.wrapper, 'row')}>
      {numbers.map(({ title, img, description }, i) => {
        return (
          <article className={cx(styles.card, 'column')}>
            <header className={cx(styles.header, 'row')}>
              <img src={img} alt="card icon"></img>
              <h3 className={cx('h3 txt-m c-green')}>{title}</h3>
            </header>
            <p className={cx(styles.description, 'body-2')}>{description}</p>
          </article>
        )
      })}
    </div>
  )
}

export default MainNumbers
