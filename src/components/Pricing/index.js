import React from 'react'
import Title from '../Title/Title'
import PricingTable from './PricingTable'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

export default () => {
  return (
    <section id='pricing'>
      <Title className={styles.title}>
        {tr('pricing.title.top', "Santiment Pricing")}
        <div className={styles.desc}>
        {tr('pricing.title.bottom', "Analyze crypto assets from multiple angles, and react to developing shifts in market sentiment and network trends.")}
        </div>
      </Title>
      <PricingTable />
    </section>
  )
}
