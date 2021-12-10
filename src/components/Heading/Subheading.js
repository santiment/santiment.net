import React from 'react'
import cx from 'classnames'
import styles from './Subheading.module.scss'

const Subheading = ({ className, children }) => (
  <h4 className={cx(styles.text, className)}>{children}</h4>
)

export default Subheading
