import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Subheading from '../components/Heading/Subheading'
import { PEOPLE, GROUPS } from '../data/team/people'
import { SocialIcon } from '../data/team/social-icons/Icon'
import styles from './team.module.scss'

const normalizesData = {}
PEOPLE.forEach(item => {
  normalizesData[item.group] = normalizesData[item.group]
    ? [...normalizesData[item.group], item]
    : [item]
})

const TeamPage = ({ intl }) => (
  <Layout>
    <SEO
      title='Santiment Team'
      description='In true crypto fashion, our team is as decentralised as they come -
        spanning 19 countries and 8 time zones (which makes organizing team
        calls a blast:)'
    />
    <div className={styles.wrapper}>
      <Subheading className={styles.title}>Santiment team</Subheading>
      <div className={styles.desc}>
        In true crypto fashion, our team is as decentralised as they come -
        spanning 19 countries and 8 time zones (which makes organizing team
        calls a blast:)
        <br />
        Meet the people dedicated to bringing context to the crypto ecosystem:
      </div>
      {Object.values(GROUPS).map(key => (
        <div key={key}>
          <h2 className={styles.group}>{key}</h2>
          <div className={styles.container}>
            {normalizesData[key].map(
              ({ name, position, description, img, links }) => (
                <div className={styles.item} key={name}>
                  {img && (
                    <div className={styles.img}>
                      <img src={img} alt={name} />
                    </div>
                  )}
                  <h3 className={styles.name}>{name}</h3>
                  <span className={styles.position}>{position}</span>
                  <div className={styles.icons}>
                    {Object.entries(links).map(([key, value]) => (
                      <SocialIcon
                        className={styles.icon}
                        href={value}
                        type={key}
                      />
                    ))}
                  </div>
                  <p className={styles.description}>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
    <GetStarted />
  </Layout>
)

export default injectIntl(TeamPage)
