import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '@santiment-network/ui/Button'
import Subheading from '../components/Heading/Subheading'
import styles from './sandata.module.scss'

const SandataPage = ({ intl }) => (
  <Layout>
    <SEO
      title='Welcome to Sandata'
      description='Cut through the noise when valuating crypto assets. Make more informed investment decisions'
    />
    <div className={styles.wrapper}>
      <Subheading className={styles.title}>Welcome to Sandata</Subheading>
      <div className={styles.desc}>
        Cut through the noise when valuating crypto assets.
        <br />
        Make more informed investment decisions
      </div>
      <div className={styles.buttons}>
      <Button as='a' href='#sign-up' variant='fill' accent='positive'>
        Get started
      </Button>
      <Button as='a' href='https://data.santiment.net' target='_blank' rel='noopener noreferrer' isActive border className={styles.login} accent='positive'>
        Log in
      </Button>
      </div>
    </div>
    <div className={styles.container}>
      <h3 className={styles.headingOne}>
        Are you a data researcher/scientist or crypto trader with a passion for
        data analysis?
      </h3>
      <h4 className={styles.headingTwo}>
        Try Sandata, a single source for on-chain, social and project indicators
        plotted against price.
      </h4>
      <p className={styles.text}>
        Spot interesting and valuable patterns that you might not see elsewhere.
        Sandata provides visualizations of on-chain, social and development
        metrics for more than 1000 crypto projects. See how a token’s social
        hype, project activity, network usage and more, relate to its price over
        time.
      </p>
    </div>
    <div className={styles.getStarted} id='sign-up'>
      <h4 className={styles.headingThird}>Yes! I’d like to try Sandata:</h4>
      <iframe
        title='Get started'
        height='900px'
        width='100%'
        frameBorder='0'
        src='https://pipedrivewebforms.com/form/25870f1262f350d2a6798bc6f595bade4144829'
      />
    </div>
  </Layout>
)

export default injectIntl(SandataPage)
