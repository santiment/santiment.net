import React from "react"
import cx from 'classnames'
import styles from "./Heading.module.scss"

const Heading = ({children, className}) => (
	<h3 className={cx(styles.wrapper, className)}>
		<span className={styles.title}>
			{children}
		</span>
	</h3>
)

export default Heading
