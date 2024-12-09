import React from 'react'
import cx from 'classnames'
import TrustedBlock from '../TrustedBlock/TrustedBlock'
import AccountBtn from '../AccountBtn/AccountBtn'
import styles from './MainBlock.module.scss'
import lp from './images/lp.svg'

const MainBlock = () => {
  return (
    <div className={cx(styles.backgroundContainer, 'relative')}>
      <section className={cx(styles.wrapper, 'column relative')}>
        <div className={cx(styles.leftBlock, 'column')}>
          <h1 className={cx(styles.title, 'mrg--b mrg-l')}>
            Gain Market Clarity
            <br />
            with Behavioural Analytics
          </h1>
          <h2 className={cx(styles.description, 'h4')}>
            Make data-driven investments powered by community insights, on-chain, social and dev
            data
          </h2>
          <AccountBtn
            classes={{
              wrapper: styles.btnWrapper,
              btn: cx(styles.btn, 'body-2'),
            }}
          />
        </div>
        <img src={lp} className={cx(styles.illustration)} alt="" />
        <div className={cx(styles.logosWrapper)}>
          <TrustedBlock />
        </div>
      </section>
    </div>
  )
}

export default MainBlock
