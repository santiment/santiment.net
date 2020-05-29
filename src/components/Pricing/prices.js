import React from 'react'
import cx from 'classnames'
import Button from '@santiment-network/ui/Button'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'


export default {
  Sanbase: {
    discount: 'price.bill_discount.free',
    desc: 'Flagship platform for crypto enthusiasts and retail investors',
    more: 'https://academy.santiment.net/products-and-plans/sanbase-pro-features/',
    Component: () => (
      <Button variant='fill' as="a" rel="noopener noreferrer" target="_blank" href='https://app.santiment.net/pricing' accent='positive' className={styles.link}>
        {tr('main.btn', 'Get started')}
      </Button>
    ),
    features: [
      'Personal asset watchlists',
      'Curated market data feed',
      '20+ on-chain, social & dev metrics',
      'Low-latency market signals and alerts',
      'Sansheets plugin with pre-made templates',
    ],
  },
  SanAPI: {
    desc: 'Built for crypto developers, quants and third-party apps',
    Component: () => (
      <Button variant='fill' accent='blue' as="a" rel="noopener noreferrer" target="_blank" href='https://neuro.santiment.net/#pricing' className={styles.link}>
        {tr('cta.try_free', 'Try it for free')}
      </Button>
    ),
    more: 'https://neuro.santiment.net/',
    features: [
      'The most comprehensive crypto API on the market',
      'TBs of processed on-chain, social, github and fundamental data',
      'Backtest strategies, build your own signals or develop trading bots',
      'Robust framework for 3rd-party integration',
    ],
  },
}
