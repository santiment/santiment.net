import React from 'react'
import cx from 'classnames'
import AccountBtn from '../AccountBtn/AccountBtn'
import visual from './images/visual.png'
import styles from './MainBlock.module.scss'

const MainBlock = () => {
  return (
    <section className={cx(styles.wrapper, 'row hv-center')}>
      <div className={cx(styles.leftBlock, 'column')}>
        <div className={cx(styles.title, 'mrg--b mrg-l')}>
          Introducing Crypto & NFT Visual Explorer
        </div>
        <div className={cx(styles.description, 'h4')}>
          Santiment makes powerful OnChain, Social & Financial analysis
          accessible to anyone. Interactive reports let you query crypto market
          data with only a few clicks, then see visualisations in seconds.
        </div>
        <AccountBtn
          classes={{
            wrapper: styles.btnWrapper,
            btn: cx(styles.btn, 'body-2')
          }}
        />
      </div>
      <img className={styles.img} src={visual} alt='img' />
    </section>
  )
}

export default MainBlock
