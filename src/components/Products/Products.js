import React, { useState } from 'react'
import cx from 'classnames'
import Tabs from '@santiment-network/ui/Tabs'
import Heading from '../Heading/Heading'
import Sanbase from './images/sanbase.png'
import SanAPI from './images/sanapi.png'
import Button from '../Features/Button'
import styles from './Products.module.scss'

const TABS = {
  Sanbase: {
    desc: 'Exclusive on-chain, social and development metrics, low-latency market signals, custom Spreadsheet templates & daily insights on the cryptocurrency market',
    link: 'https://app.santiment.net/',
    img: Sanbase
  },
  SanAPI: {
    desc: 'One of the most comprehensive crypto APIs on the market. Single endpoint access for on-chain, social, pricing and development information on 2000+ coins',
    link: 'https://api.santiment.net/',
    img: SanAPI
  }
}

const Products = ({className}) => {
  const [selected, setSelected] = useState('Sanbase')
  return (
    <div className={cx(styles.wrapper, className)}>
      <Heading className={styles.title}>Our products</Heading>
      <Tabs
        onSelect={tab => setSelected(tab)}
        options={Object.keys(TABS)}
        defaultSelectedIndex='Sanbase'
        className={styles.tabs}
      />
      <p className={styles.desc}>{TABS[selected].desc}</p>
      <Button href={TABS[selected].link} />
      <img className={styles.img} src={TABS[selected].img} alt='' />
    </div>
  )
}

export default Products
