import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Subheading from '../components/Heading/Subheading'
import styles from './about.module.scss'

const AboutPage = ({ intl }) => (
  <Layout>
    <SEO title='Signals and Context for the crypto ecosystem' description='From the beginning, our team has been guided by a single mission - to eliminate information asymmetry in the crypto ecosystem...' />
    <div className={styles.wrapper}>
      <Subheading className={styles.title}>Signals and Context for the crypto ecosystem</Subheading>
      <div className={styles.desc}>
        <div>
        	From the beginning, our team has been guided by a single mission - to eliminate <strong>information asymmetry</strong> in the crypto ecosystem.
        </div>
        <div>
        	Blockchain technology is changing the world, but there’s still a concerning lack of credible, actionable information on the crypto industry and its major stakeholders.
        </div>
      </div>
    </div>
    <GetStarted />
  </Layout>
)

export default injectIntl(AboutPage)
