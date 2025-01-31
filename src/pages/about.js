import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Subheading from '../components/Heading/Subheading'
import Heading from '../components/Heading/Heading'
import Steps from '../components/Steps/Steps'
import AboutSAN from '../components/AboutSAN/AboutSAN'
import Products from '../components/Products/Products'
import team from '../images/team.jpg'
import styles from './about.module.scss'

const AboutPage = ({ intl }) => (
  <Layout>
    <SEO
      title="Crypto Analytics Platform: Blockchain Data to Guide Investments"
      description="As a crypto analytics platform, our team has been guided by a single mission - to eliminate information asymmetry in the crypto ecosystem by using blockchain data."
    />
    <div className={styles.wrapper}>
      <Subheading El="h1" className={styles.title}>
        Crypto analytics platform for Signals and Context
      </Subheading>
      <div className={styles.desc}>
        <div>
          From the beginning, our team has been guided by a single mission - to eliminate{' '}
          <strong>information asymmetry</strong> in the crypto ecosystem.
        </div>
        <div>
          Blockchain technology is changing the world, but there’s still a concerning lack of
          credible, actionable information on the crypto industry and its major stakeholders.
        </div>
      </div>
      <h3 className={styles.heading}>Everyone is guessing</h3>
      <div className={styles.text}>
        Our mission is to block out the noise and provide data-driven insights on cryptocurrency
        networks, blockchain-based projects, crowd sentiment and market behavior.
      </div>
      <Heading>Our team</Heading>
      <div className={styles.team}>
        <img src={team} alt="team" />
      </div>
      <div className={styles.info}>54 experts | 19 countries | 2016 founded | 57k ETH raised</div>
      <Steps />
      <AboutSAN />
      <Products className={styles.products} />
    </div>
    <GetStarted />
  </Layout>
)

export default injectIntl(AboutPage)
