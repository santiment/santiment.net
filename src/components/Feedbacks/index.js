import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import Testimonials from "../Testimonials"
import Twitter from "../Twitter"
import styles from './index.module.scss'

const TwitterBg = ({ className }) => (
  <Icon type='twitter' className={className} />
)

const Feedbacks = () => (
  <div>
    <Testimonials />
    <div className={styles.container}>
      <div className={styles.header}>
        <TwitterBg className={styles.headerBg} />
        <div className={styles.title}>
          <TwitterBg className={styles.twitterBlue} />
          More reviews from Twitter
        </div>
      </div>
      <Twitter />
    </div>
  </div>
)

export default Feedbacks
