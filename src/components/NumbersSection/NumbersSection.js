import React from 'react'
import cx from 'classnames'
import styles from './NumbersSection.module.scss'
import Leading from './Leading'
import MainNumbers from './MainNumbers'

const NumbersSection = () => (
  <section className={cx(styles.wrapper, 'row hv-center c-white')}>
    <section className={cx(styles.content, 'row')}>
      <Leading />

      <MainNumbers />
    </section>
  </section>
)

export default NumbersSection
