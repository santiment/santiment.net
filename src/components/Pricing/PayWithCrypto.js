import React from "react"
import Icon from '@santiment-network/ui/Icon'
import styles from "./PayWithCrypto.module.scss"

const PayWithCrypto = () => (
	<section className={styles.wrapper}>
		<h3 className={styles.title}>Pay with crypto</h3>
		<h3 className={styles.desc}>You can burn SAN tokens or pay by DAI/ETH</h3>
		<a href="https://academy.santiment.net/products-and-plans/how-to-pay-with-crypto/" className={styles.link} target="_blank">
			Learn more
			<Icon type="pointer-right" className={styles.icon} />
		</a>
	</section>
)

export default PayWithCrypto
