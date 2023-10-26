import React from 'react'
import cx from 'classnames'
import styles from './Numbers.module.scss'

const numbers = [
  {
    textTag: 'assets',
    defaultText: 'Available crypto assets',
    number: '2000+',
  },
  {
    textTag: 'metrics',
    defaultText: 'Available metrics',
    number: '850+',
  },
  {
    textTag: 'labels',
    defaultText: 'Available wallet labels',
    number: '22',
  },
  {
    textTag: 'social',
    defaultText: 'Parsed social messages per month',
    number: '7+ million',
  },
  {
    textTag: 'blockchain',
    defaultText: 'Available blockchains',
    number: '12',
  },
  {
    textTag: 'data',
    defaultText: 'Historical data since',
    number: '2009',
  },
]

const Numbers = () => (
  <section className={cx(styles.wrapper, 'row hv-center')}>
    <div className={styles.content}>
      <ul className={styles.numbers}>
        {numbers.map(({ textTag, defaultText, number }) => (
          <li className={cx(styles.item, 'column hv-center')} key={textTag}>
            <div className={cx(styles.title, 'body-1')}>{defaultText}</div>
            <div className={cx(styles.description, 'txt-b')}>{number}</div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Numbers
