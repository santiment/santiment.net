import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Subheading from '../components/Heading/Subheading'
import styles from './jobs.module.scss'

const JobsPage = ({ intl }) => (
  <Layout>
    <SEO title='Santiment Jobs' />
    <div className={styles.wrapper}>
      <Subheading className={styles.title}>Join us at Santiment</Subheading>
      <div className={styles.desc}>
        We’re a 100% distributed team working together from around the world,
        and we welcome top talent to help us change the future of trading
        crypto-markets. We’re constantly focused on keeping our work in a
        collaborative, creative and open environment. If these are your values
        too, come join us!
      </div>
      <div className={styles.widget}>
        {/* Recooty Widget START */}
          <iframe id="iframe-container-1" width="100%" height="250" frameborder="0" src="https://widget.recooty.com/openings.php?key=5b86a52a1629a2613c83154ee16153d23e70d73ff0b6b"></iframe>
        {/* Recooty Widget END */}
      </div>
    </div>
    <GetStarted />
  </Layout>
)

export default injectIntl(JobsPage)
