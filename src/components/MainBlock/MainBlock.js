import React from 'react'
import cx from 'classnames'
import AccountBtn from '../AccountBtn/AccountBtn'
import visual from './images/visual.png'
import styles from './MainBlock.module.scss'

const MainBlock = () => {
  return (
    <section className={cx(styles.wrapper, 'row hv-center')}>
      <div className={cx(styles.leftBlock, 'column')}>
        <div className={cx(styles.title, 'txt-b mrg--b mrg-l')}>
          Introducing Crypto & NFT Visual Explorer
        </div>
        <div className={cx(styles.description, 'h4')}>
          On-Chain data, social media and sentiment analysis tools for the
          cryptocurrency and NFT market
        </div>
        <AccountBtn
          classes={{
            wrapper: styles.btnWrapper,
            btn: cx(styles.btn, 'body-2')
          }}
        />
      </div>
      <img className={styles.img} src={visual} alt='Chart' />
    </section>
  )
}

export default MainBlock
