import React from 'react'
import cx from 'classnames'
import styles from './Subheading.module.scss'

const Subheading = ({ className, children, El = 'h4' }) => (
  <El className={cx(styles.text, className)}>{children}</El>
)

export default Subheading
