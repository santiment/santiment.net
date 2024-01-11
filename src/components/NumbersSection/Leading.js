import React from 'react'
import cx from 'classnames'
import AccountBtn from '../AccountBtn/AccountBtn'
import styles from './Leading.module.scss'

const Leading = () => {
  return (
    <div className={cx(styles.leading, 'column')}>
      <h2 className={cx(styles.title, 'h2 txt-b mrg-xl mrg--b')}>
        Leading Analytics Proven by Numbers
      </h2>
      <p className={cx(styles.description, 'body-1')}>
        Leverage our years of expertise in behavioural analysis as we continuously turn data points
        into reliable insights, guiding you through the complexities of the ever-evolving crypto
        market.
      </p>
      <AccountBtn
        classes={{
          wrapper: styles.btnWrapper,
          btn: cx(styles.btn, 'body-2'),
        }}
      />
    </div>
  )
}

export default Leading
