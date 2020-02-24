import React from 'react'
import Button from '@santiment-network/ui/Button'
import { tr } from '../../utils/translate'
import insight from './images/insight.png'
import signal from './images/signal.png'
import trends from './images/trends.png'
import insightMobile from './images/Insight_mobile.png'
import signalMobile from './images/signal_mobile.png'
import trendsMobile from './images/trends_mobile.png'
import styles from './Feed.module.scss'

const Feed = () => (
  <div className={styles.wrapper}>
    <img className={styles.img} src={trends} />
    <img className={styles.img} src={insight} />
    <img className={styles.img} src={signal} />
    <img className={styles.img__mobile} src={trendsMobile} />
    <img className={styles.img__mobile} src={insightMobile} />
    <img className={styles.img__mobile} src={signalMobile} />
    <Button
      className={styles.btn}
      variant='flat'
      fluid
      isActive
      as='a'
      target='_blank'
      rel='noopener noreferrer'
      href='https://app.santiment.net/feed'
    >
      {tr('feed.btn', 'See all activities')}
    </Button>
  </div>
)

export default Feed
