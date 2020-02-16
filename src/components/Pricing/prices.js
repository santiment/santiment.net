import React from 'react'
import Button from '@santiment-network/ui/Button'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'


export default {
  FREE: {
    discount: 'price.bill_discount.free',
    link: 'Upgrade now',
    Component: () => (
      <Button accent='sheets' border fluid className={styles.link} disabled>
        {tr('cta.default_plan')}
      </Button>
    ),
    features: [
      'Limited access in Google plugin for sheets',
      'Timeseries metrics - 2 years of historical data',
      'Timeseries metrics - up to last 30 days of data',
    ],
  },
  BASIC: {
    title: 'Basic',
    desc: 'Great for short-term analysis and prototyping',
    link: 'Upgrade now',
    Component: () => (
      <Button accent='sheets' border fluid className={styles.link} disabled>
        {tr('cta.default_plan')}
      </Button>
    ),
    features: [
      'Limited access in Google plugin for sheets',
      'Timeseries metrics - 2 years of historical data',
      'Timeseries metrics - up to last 7 days of data',
    ],
  },
  PRO: {
    Component: () => (
      <Button accent='sheets' border fluid className={styles.link} disabled>
        {tr('cta.default_plan')}
      </Button>
    ),
    link: 'Upgrade now',
    features: [
      'Full access in Google plugin for sheets',
      'Timeseries metrics - 5 years of historical data',
      'Timeseries metrics - including present-day data',
      <span>
        Bonus: Full access{' '}
        <a
          className={styles.featureLink}
          target='_blank'
          rel='noopener noreferrer'
          href='https://app.santiment.net/'
        >
          Sanbase app
        </a>
      </span>,
    ],
  },
}
