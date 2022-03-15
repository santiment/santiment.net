import React from 'react'
import Search from './SearchInput'
import styles from './MainBlock.module.scss'

const MainBlock = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Get Unique Insights</h1>
      <div className={styles.description}>
        For your crypto portfolio management
      </div>
      <div className={styles.input}>
        <Search />
      </div>
    </section>
  )
}

export default MainBlock
