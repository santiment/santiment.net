import React, { useState } from 'react'
import cx from 'classnames'
import Tabs from '@santiment-network/ui/Tabs'
import Heading from '../Heading/Heading'
import Sanbase from './images/sanbase.png'
import Sandata from './images/sandata.png'
import SanAPI from './images/sanapi.png'
import Button from '../Features/Button'
import styles from './Products.module.scss'

const TABS = {
  Sanbase: {
    desc: 'Over a dozen unique on-chain, social and development metrics, custom market templates, unlimited low-latency signals and access to exclusive market reports',
    link: 'https://app.santiment.net/',
    img: Sanbase
  },
  Sandata: {
    desc: 'Over a dozen unique on-chain, social and development metrics, custom market templates, unlimited low-latency signals and access to exclusive market reports',
    link: 'https://data.santiment.net/',
    img: Sandata
  },
  SanAPI: {
    desc: 'Over a dozen unique on-chain, social and development metrics, custom market templates, unlimited low-latency signals and access to exclusive market reports',
    link: 'https://neuro.santiment.net/',
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
      />
      <p className={styles.desc}>{TABS[selected].desc}</p>
      <Button href={TABS[selected].link} />
      <img className={styles.img} src={TABS[selected].img} alt='' />
    </div>
  )
}

export default Products
