import React from 'react'
import ReactLinkPointer from '../../components/LinkPointer'
import styles from './PayWithCrypto.module.scss'

const PayWithCrypto = () => (
  <section className={styles.wrapper}>
    <h3 className={styles.title}>Pay with crypto</h3>
    <h3 className={styles.desc}>You can burn SAN tokens or pay by DAI/ETH</h3>
    <ReactLinkPointer label="Learn more" href='https://academy.santiment.net/products-and-plans/how-to-pay-with-crypto/' target='_blank' rel='noopener noreferrer' />
  </section>
)

export default PayWithCrypto
