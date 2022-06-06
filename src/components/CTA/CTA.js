import React from 'react'
import cx from 'classnames'
import AccountBtn from '../AccountBtn/AccountBtn'
import coin from './images/coin.svg'
import block from './images/block.svg'
import arrow from './images/arrow.svg'
import styles from './CTA.module.scss'

const Cta = () => (
  <div className={cx(styles.wrapper, 'row hv-center')}>
    <div className={cx(styles.content, 'row v-center')}>
      <div className={styles.leftBlockWrapper}>
        <div className={cx(styles.leftBlock, 'column')}>
          <div className={cx(styles.title, 'h2 txt-b mrg--b mrg-m')}>
            Ready to get started?
          </div>
          <div className={cx(styles.description, 'body-1')}>
            Start using Santiment for free, and explore all the tools and
            services you need to make better financial decisions. No credit card
            needed
          </div>
          <AccountBtn
            classes={{
              wrapper: styles.btnWrapper,
              btn: cx(styles.btn, 'body-2')
            }}
          />
        </div>
      </div>
      <div className={cx(styles.rightBlock, 'row')}>
        <div className={styles.leftLink}>
          <img src={coin} alt='Img' className={styles.img} />
          <div className={cx(styles.subtitle, 'body-1 txt-b mrg--b mrg-xs')}>
            Explore our prices
          </div>
          <div className={cx(styles.subdescription, 'body-3 txt-m')}>
            Get the most out of our advanced metrics and access the private
            community
          </div>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://app.santiment.net/pricing'
            className={cx('btn txt-b row v-center', styles.arrowBtn)}
          >
            See our plans <img src={arrow} alt='Img' className='mrg--l mrg-s' />
          </a>
        </div>
        <div className={styles.divider} />
        <div className={styles.rightLink}>
          <img src={block} alt='Img' className={styles.img} />
          <div className={cx(styles.subtitle, 'body-1 txt-b mrg--b mrg-xs')}>
            Start your data integration
          </div>
          <div className={cx(styles.subdescription, 'body-3 txt-m')}>
            Integrate our social, on-chain and financial datasets with your data
            lake or quant pipeline
          </div>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://api.santiment.net/'
            className={cx('btn txt-b row v-center', styles.arrowBtn)}
          >
            Explore our API{' '}
            <img src={arrow} alt='Img' className='mrg--l mrg-s' />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Cta