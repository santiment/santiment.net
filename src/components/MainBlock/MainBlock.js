import React from 'react'
import cx from 'classnames'
import { ApolloProvider } from '@apollo/react-common'
import Search from 'sanbase/src/components/Navbar/Search'
import Background from './Background/Background'
import { client } from '../../apollo/client'
import styles from './MainBlock.module.scss'

const MainBlock = () => {
  return (
    <section className={styles.wrapper}>
      <Background />
      <h1 className={styles.title}>Get Unique Insights</h1>
      <div className={styles.description}>
        For your crypto portfolio management
      </div>
      <div className={cx(styles.input, 'row h-center')}>
        <ApolloProvider client={client}>
          <Search className={styles.search} />
        </ApolloProvider>
      </div>
    </section>
  )
}

export default MainBlock
