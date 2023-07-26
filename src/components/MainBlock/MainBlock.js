import React from 'react'
import cx from 'classnames'
import TrustedBlock from '../TrustedBlock/TrustedBlock'
import AccountBtn from '../AccountBtn/AccountBtn'
import spaceMan from './images/space-man.svg'
import styles from './MainBlock.module.scss'

const MainBlock = () => {
  const illustration = <img className={styles.img} src={spaceMan} alt="Space Man Illustrastion" />

  return (
    <div className={cx(styles.backgroundContainer, 'relative')}>
      <section className={cx(styles.wrapper, 'column relative')}>
        <div className={cx(styles.leftBlock, 'column')}>
          <div className={cx(styles.title, 'mrg--b mrg-l')}>
            Gain Market Clarity
            <br />
            with Behavioural Analytics
          </div>
          <div className={cx(styles.description, 'h4')}>
            Make data-driven investments powered by community insights, on-chain, social and dev
            data
          </div>
          <AccountBtn
            classes={{
              wrapper: styles.btnWrapper,
              btn: cx(styles.btn, 'body-2'),
            }}
          />
        </div>
        <div className={cx(styles.illustrationBottom)}>{illustration}</div>
        <div className={cx(styles.logosWrapper)}>
          <TrustedBlock />
        </div>
      </section>
      <div className={cx(styles.illustrationRight)}>{illustration}</div>
    </div>
  )
}

export default MainBlock
