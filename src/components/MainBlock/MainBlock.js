import React from 'react'
import Background from './Background/Background'
import Search from './SearchInput'
import styles from './MainBlock.module.scss'

const MainBlock = () => (
  <section className={styles.wrapper}>
    <Background />
    <h1 className={styles.title}>Get Unique Insights</h1>
    <div className={styles.description}>
      For your crypto portfolio management
    </div>
    <div className={styles.input}>
      <Search />
    </div>
  </section>
)

export default MainBlock

