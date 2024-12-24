import React from 'react'
import cx from 'classnames'
import TrustedBlock from '../TrustedBlock/TrustedBlock'
import AccountBtn from '../AccountBtn/AccountBtn'
import styles from './MainBlock.module.scss'

const MainBlock = () => {
  return (
    <div className={styles.backgroundContainer}>
      <section className={cx(styles.wrapper, 'column relative')}>
        <div className={cx(styles.leftBlock, 'column')}>
          <h1 className={cx(styles.title, 'mrg--b mrg-l')}>
            Gain Actionable Insights with Behavior Analytics in Crypto
          </h1>
          <h2 className={cx(styles.description, 'h4')}>
            Make smarter decisions with powerful tools and trusted data sources
          </h2>
          <AccountBtn
            classes={{
              wrapper: styles.btnWrapper,
              btn: cx(styles.btn, 'body-2'),
            }}
          />
        </div>
        <div className={cx(styles.logosWrapper)}>
          <TrustedBlock />
        </div>
        <div className={cx(styles.rightBlock, 'column')}>
          <h1 className={styles.title}>Access Comprehensive Set of Data Sources</h1>
          <h2 className={cx(styles.description, 'h4')}>
            Use social, blockchain, financial, dev, and community metrics to improve your strategy
          </h2>
        </div>
      </section>
    </div>
  )
}

export default MainBlock
