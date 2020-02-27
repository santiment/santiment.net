import React, { useState } from 'react'
import Tabs from '@santiment-network/ui/Tabs'
import Heading from '../Heading/Heading'
import styles from './Products.module.scss'

const TABS = {
  Sanbase: {
    desc: '',
    link: '',
    img: ''
  },
  Sandata: {
    desc: '',
    link: '',
    img: ''
  },
  SanAPI: {
    desc: '',
    link: '',
    img: ''
  }
}

const Products = () => {
  const [selected, setSelected] = useState('Sanbase')
  return (
    <div className={styles.wrapper}>
      <Heading className={styles.title}>Our products</Heading>
      <Tabs
        onSelect={tab => setSelected(tab)}
        options={Object.keys(TABS)}
        defaultSelectedIndex='Sanbase'
      />
      <h4>{TABS[selected].desc}</h4>
    </div>
  )
}

export default Products
