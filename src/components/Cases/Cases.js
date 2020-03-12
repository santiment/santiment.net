import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import Heading from '../Heading/Heading'
import Subheading from '../Heading/Subheading'
import tops from './tops.svg'
import bottoms from './bottoms.svg'
import activity from './activity.svg'
import markers from './markers.svg'
import styles from './Cases.module.scss'

const items = [
  {
    title: 'Spot forming tops and exit opportunities',
    icon: tops,
    key: 'tops',
    link:
      'https://academy.santiment.net/for-traders/#spot-tops-and-exit-opportunities'
  },
  {
    title: 'Identify and monitor volatility markers',
    icon: markers,
    key: 'markers',
    link:
      'https://academy.santiment.net/for-traders/#identify-and-monitor-volatility-markers'
  },
  {
    title: 'Spot bottoms and market entry points',
    icon: bottoms,
    key: 'bottoms',
    link:
      'https://academy.santiment.net/for-traders/#spot-bottoms-and-entry-opportunities'
  },
  {
    title: 'Contextualize network behavior and activity',
    icon: activity,
    key: 'activity',
    link:
      'https://academy.santiment.net/for-traders/#study-and-contextualize-market-activity'
  }
]

const Cases = () => (
  <section className={styles.wrapper}>
    <Heading className={styles.subtitle}>Use Cases</Heading>
    <ul className={styles.list}>
      {items.map(({ link, icon, title, key }) => (
        <li className={styles.item} key={key}>
          <div>
            <img src={icon} className={styles.icon} />
          </div>
          <div className={styles.text}>
            <h4 className={styles.title}>{title}</h4>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              See case study
              <Icon type='pointer-right' className={styles.arrow} />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

export default Cases
