import React from 'react'
import cx from 'classnames'
import styles from './Mission.module.scss'
import teamImg from './images/team.png'

const Mission = () => (
  <section className={cx(styles.wrapper, 'row')}>
    <img className={cx(styles.image)} src={teamImg} alt="team" />
    <div className="column">
      <h5 className={cx(styles.caption, 'body-2 txt-b c-orange')}>Our Mission</h5>
      <h2 className={cx(styles.title, 'h2 txt-b')}>
        We Simplify the Analysis and Create Alpha Together
      </h2>
      <p className={cx(styles.description, 'body-1')}>
        Since our founding in 2016, we’ve been on a mission to develop the best market behaviour
        analysis tools available for crypto investors.
        <br />
        All market participants and stakeholders must perform complex analysis in order to make wise
        investment decisions. We simplify this process and make analysis more accessible by helping
        people understand the meaning behind the behaviour (i.e. buying, holding and selling
        activity) of key groups within the crypto ecosystem.
      </p>
    </div>
  </section>
)

export default Mission
