import React from 'react'
import cx from 'classnames'
import img from './images/img.png'
import backGreen from './images/back-green.svg'
import backYellow from './images/back-yellow.svg'
import backGrey from './images/back-grey.svg'
import styles from './Description.module.scss'

const Description = () => (
  <div className={cx(styles.wrapper, 'row hv-center')}>
    <div className={cx(styles.content, 'row v-center')}>
      <img src={img} alt='img' className={styles.img} />
      <div className='column'>
        <div className={cx(styles.title, 'body-2 txt-b mrg--b mrg-xs')}>
          All-in-one platform
        </div>
        <div className={cx(styles.addTitle, 'h2 txt-b mrg--b mrg-xl')}>
          Crypto intelligence tools
        </div>
        <div className={cx(styles.description, 'body-1')}>
          We bring together everything that you can use to make your next
          action. Datasets, <span className={styles.asset}>screeners</span>,{' '}
          <span className={styles.asset}>watchlists</span>,{' '}
          <span className={styles.asset}>alerts</span>, flexible{' '}
          <span className={styles.asset}>chart layouts</span>,{' '}
          <span className={styles.asset}>dashboards</span>,{' '}
          <span className={styles.asset}>insights</span> from the community and
          the San analytics team.
        </div>
        <div className={cx(styles.description, 'body-1')}>
          Since 2016, Santiment has produced a platform to research crypto data
          intelligence tools for hedge fund managers, retail investors, crypto
          project owners, and NFT creators.
        </div>
        <div className={cx(styles.block, 'row hv-center')}>
          <div className='column hv-center relative'>
            <img src={backGreen} alt='img' className={styles.assetImg} />
            <div className={cx(styles.subtitle, 'h4')}>Financial</div>
            <div className={cx(styles.subdescription, 'body-2')}>datasets</div>
          </div>
          <div className='column hv-center relative'>
            <img src={backYellow} alt='img' className={styles.assetImg} />
            <div className={cx(styles.subtitle, 'h4')}>On-chain</div>
            <div className={cx(styles.subdescription, 'body-2')}>datasets</div>
          </div>
          <div className='column hv-center relative'>
            <img src={backGrey} alt='img' className={styles.assetImg} />
            <div className={cx(styles.subtitle, 'h4')}>Social</div>
            <div className={cx(styles.subdescription, 'body-2')}>datasets</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Description
