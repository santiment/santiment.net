import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Subheading from '../components/Heading/Subheading'
import Email from '../data/team/social-icons/Email'
import { PEOPLE } from '../data/team/people'
import styles from './team.module.scss'

const TeamPage = ({ intl }) => (
  <Layout>
    <SEO title='Santiment Jobs' />
    <div className={styles.wrapper}>
      <Subheading className={styles.title}>Santiment team</Subheading>
      <div className={styles.desc}>
        In true crypto fashion, our team is as decentralised as they come -
        spanning X countries and X time zones (which makes organizing team calls
        a blast:)
        <br />
        Meet the people dedicated to bringing context to the crypto ecosystem:
      </div>
      {PEOPLE.map(({ name, group, links, img, position, description }) => (
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={img} />
          </div>
          <h2 className={styles.name}>{name}</h2>
          <span className={styles.position}>{position}</span>
          <p className={styles.description}>{description}</p>
        </div>
      ))}
      <Email className={styles.icon} />
    </div>
    <GetStarted />
  </Layout>
)

export default injectIntl(TeamPage)
