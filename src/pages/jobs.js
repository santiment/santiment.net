import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Subheading from '../components/Heading/Subheading'
import styles from './jobs.module.scss'

const JobsPage = ({ intl }) => (
  <Layout>
    <SEO title='Santiment Jobs' description='We’re a 100% distributed team working together from around the world,
        and we welcome top talent to help us change the future of trading
        crypto-markets. We’re constantly focused on keeping our work in a
        collaborative, creative and open environment. If these are your values
        too, come join us!' />
    <div className={styles.wrapper}>
      <Subheading className={styles.title}>Join us at Santiment</Subheading>
      <div className={styles.desc}>
        We’re a 100% distributed team working together from around the world,
        and we welcome top talent to help us change the future of trading
        crypto-markets. We’re constantly focused on keeping our work in a
        collaborative, creative and open environment. If these are your values
        too, come join us!
        <br />
        List of our  
        <a
          href="https://www.notion.so/santiment/Open-positions-f1880de7557b468a80b1465013f311cd"
          target='_blank'
          rel='noopener noreferrer'
          > open positions</a>
        </div>
    </div>
    <GetStarted />
  </Layout>
)

export default injectIntl(JobsPage)
