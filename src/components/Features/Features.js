import React from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import Heading from '../Heading/Heading'
import Tabs from './Tabs'
import TryButton from './Button'
import trends from './images/trends.png'
import insights from './images/insights.png'
import styles from './Features.module.scss'

const Features = () => (
  <div className={styles.wrapper}>
    <Heading>Features</Heading>
    <div className={cx(styles.feature, styles.feature__trends)}>
        <h4 className={cx(styles.title,styles.title__mobile)}>Emerging Social Trends</h4>
      <div className={styles.img__wrapper}>
        <img className={styles.img__trends} src={trends} />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://app.santiment.net/labs/trends'
          className={styles.link}
        >
          Explore social trends on Sanbase
        </a>
      </div>
      <div className={styles.text}>
        <h4 className={styles.title}>Emerging Social Trends</h4>
        <div className={styles.paragraph}>
          We strongly believe that <b>crowd psychology</b> is key to
          understanding where markets might move next.
        </div>
        <div className={styles.paragraph}>
          Our <b>Emerging Trends</b> calculates the top 10 words with the
          highest spike in mentions on crypto social media, compared to each
          associated word’s previous 2-week average.
        </div>
        <TryButton />
      </div>
    </div>
    <div className={cx(styles.feature, styles.feature__insights)}>
         <h4 className={cx(styles.title,styles.title__mobile)}>
          Insights and behavioral reports about the markets
        </h4>
      <div className={styles.img__wrapper}>
        <img className={styles.img__insights} src={insights} />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://insights.santiment.net/'
          className={styles.link}
        >
          Get key insights and even earn crypto… !{' '}
        </a>
      </div>
      <div className={styles.text}>
        <h4 className={styles.title}>
          Insights and behavioral reports about the markets
        </h4>
        <div className={styles.paragraph}>
          The Santiment team is constantly releasing{' '}
          <b>new behavior analysis</b>, helping our community stay ahead of
          imminent developments.
        </div>
        <div className={styles.paragraph}>
          As a community member you can provide your own analysis as well, using
          our data to help you earn your own following.
        </div>
        <div className={styles.paragraph}>
          Join our leaderboard! - if you create a top article that the Santiment
          community really appreciates, you’ll receive free crypto as a reward!
        </div>
        <TryButton />
      </div>
    </div>
    <Tabs />
  </div>
)

export default Features
