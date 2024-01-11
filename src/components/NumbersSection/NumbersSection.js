import React from 'react'
import cx from 'classnames'
import styles from './NumbersSection.module.scss'
import Leading from './Leading'
import MainNumbers from './MainNumbers'
import Numbers from './Numbers'

const NumbersSection = () => (
  <div className={cx(styles.wrapper, 'row hv-center c-white')}>
    <section className={cx(styles.content, 'column')}>
      <div className={cx(styles.main, 'row')}>
        <Leading />

        <MainNumbers />
      </div>

      <Numbers />
    </section>
  </div>
)

export default NumbersSection
