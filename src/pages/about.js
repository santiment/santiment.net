import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Subheading from '../components/Heading/Subheading'
import Heading from '../components/Heading/Heading'
import Products from '../components/Products/Products'
import team from '../images/team.jpg'
import styles from './about.module.scss'

const data = [
  {
    title: 'Machine Effort',
    desc: 'We’re crunching massive amounts of information from a plurality of reliable sources, pulling it all into our growing stream of signals and datafeeds:',
    points: ['Price and Volume data', 'Development (GitHub) Activity data', 'On-chain data', 'Holder behavior activity', 'Social media activity', 'Crowd sentiment data ']
  },
  {
    title: 'Human Intuition',
    desc: 'Our team and community are constantly testing the data’s integrity and viability, and building simple interfaces to turn this information into digestible, actionable insights:',
    points: ['Research Reports', 'Network Audits', 'Price/Trend Analysis', 'Trading Strategies / Market Alphas', 'Sentiment Analysis']
  }
]

const AboutPage = ({ intl }) => (
  <Layout>
    <SEO
      title='Signals and Context for the crypto ecosystem'
      description='From the beginning, our team has been guided by a single mission - to eliminate information asymmetry in the crypto ecosystem...'
    />
    <div className={styles.wrapper}>
      <Subheading className={styles.title}>
        Signals and Context for the crypto ecosystem
      </Subheading>
      <div className={styles.desc}>
        <div>
          From the beginning, our team has been guided by a single mission - to
          eliminate <strong>information asymmetry</strong> in the crypto
          ecosystem.
        </div>
        <div>
          Blockchain technology is changing the world, but there’s still a
          concerning lack of credible, actionable information on the crypto
          industry and its major stakeholders.
        </div>
      </div>
      <h3 className={styles.heading}>Everyone is guessing</h3>
      <div className={styles.text}>
        Our mission is to block out the noise and provide data-driven insights
        on cryptocurrency networks, blockchain-based projects, crowd sentiment
        and market behavior.
      </div>
      <Heading>Our team</Heading>
      <div className={styles.team}>
        <img src={team} />
      </div>
      <div className={styles.info}>
        30 experts | 10 countries | 2016 founded | 57k ETH raised
      </div>
      {/* <Heading>How do we accomplish our goals?</Heading> */}
      {/* <Subheading> */}
      {/*   Bringing machine effort and human intuition together */}
      {/* </Subheading> */}
      <Products />
    </div>
    <GetStarted />
  </Layout>
)

export default injectIntl(AboutPage)
