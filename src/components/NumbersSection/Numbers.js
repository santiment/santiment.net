import React from 'react'
import cx from 'classnames'
import styles from './Numbers.module.scss'

const numbers = [
  {
    title: 'Parsed Messages Monthly',
    number: '3+ Million',
  },
  {
    title: 'Labelled ETH Addresses',
    number: '75+ Million',
  },
  {
    title: 'Labelled BTC Addresses',
    number: '65+ Million',
  },
  {
    title: 'Metrics',
    number: '1100+',
  },
  {
    title: 'Crypto Assets',
    number: '2500+',
  },
]

const Numbers = () => {
  return (
    <div className={cx(styles.wrapper, 'row justify')}>
      {numbers.map(({ title, number }, i) => {
        return (
          <article className={cx(styles.item, 'row justify')}>
            <div className={cx(styles.itemContent, 'column v-center')}>
              <h5 className={cx(styles.title, 'body-2 txt-m nowrap c-waterloo')}>{title}</h5>
              <h3 className={cx(styles.number, 'h3 txt-m nowrap')}>{number}</h3>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Numbers
