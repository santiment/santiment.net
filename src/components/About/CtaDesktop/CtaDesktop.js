import React, { useLayoutEffect, useState } from 'react'
import cx from 'classnames'
import ReactLinkPointer from '../../LinkPointer'
import first from '../images/1.png'
import second from '../images/2.png'
import third from '../images/3.png'
import fourth from '../images/4.png'
import styles from '../About.module.scss'

const images = [first, second, third, fourth]

const CtaDesktop = () => {
  const [visibleImage, setVisibleImage] = useState(0)

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop

      if (scrollTop < 2912 && visibleImage !== 0) {
        setVisibleImage(0)
      }

      if (scrollTop > 2912 && scrollTop < 3506 && visibleImage !== 1) {
        setVisibleImage(1)
      }

      if (scrollTop > 3506 && scrollTop < 4128 && visibleImage !== 2) {
        setVisibleImage(2)
      }

      if (scrollTop > 4128 && visibleImage !== 3) {
        setVisibleImage(3)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibleImage])

  return (
    <div className='row justify relative'>
      <div className={cx(styles.ctaDesktopContent, 'column')}>
        <div className={cx(styles.ctaBlockWrapper, 'column h-center')}>
          <div className={styles.ctaBlockText}>
            <div className={cx(styles.ctaTitle, 'mrg-m mrg--b body-2 txt-b')}>
              Social metrics
            </div>
            <div
              className={cx(styles.ctaDescription, 'mrg-xl mrg--b h2 txt-b')}
            >
              What are people talking about in crypto?
            </div>
            <div
              className={cx(styles.ctaDescriptionAdd, 'mrg-m mrg--b body-1')}
            >
              Take a look at crypto market social trends and sentiment charts
            </div>
            <ReactLinkPointer class="body-2" label="Get to know social trends" href="https://app.santiment.net/s/1PcSbMgY" target='_blank' rel='noopener noreferrer' />
          </div>
        </div>
        <div className={cx(styles.ctaBlockWrapper, 'column h-center')}>
          <div className={styles.ctaBlockText}>
            <div className={cx(styles.ctaTitle, 'mrg-m mrg--b body-2 txt-b')}>
              On-chain metrics
            </div>
            <div
              className={cx(styles.ctaDescription, 'mrg-xl mrg--b h2 txt-b')}
            >
              Are traders in profit or loss territory?
            </div>
            <div
              className={cx(styles.ctaDescriptionAdd, 'mrg-m mrg--b body-1')}
            >
              Study aggregate investor behaviors as price moves to/from their
              cost basis
            </div>
            <ReactLinkPointer class="body-2" label="Track market movements" href="https://app.santiment.net/s/ybwyoqGG" target='_blank' rel='noopener noreferrer' />
          </div>
        </div>
        <div className={cx(styles.ctaBlockWrapper, 'column h-center')}>
          <div className={styles.ctaBlockText}>
            <div className={cx(styles.ctaTitle, 'mrg-m mrg--b body-2 txt-b')}>
              Stakeholders metrics
            </div>
            <div
              className={cx(styles.ctaDescription, 'mrg-xl mrg--b h2 txt-b')}
            >
              Are whales accumulating or dumping?
            </div>
            <div
              className={cx(styles.ctaDescriptionAdd, 'mrg-m mrg--b body-1')}
            >
              See asset holder distribution, top holders, and whales transaction
              tracking tools
            </div>
            <ReactLinkPointer class="body-2" label="Investigate whales activities" href="https://app.santiment.net/s/czuEB2R6" target='_blank' rel='noopener noreferrer' />
          </div>
        </div>
        <div className={cx(styles.ctaBlockWrapper, 'column h-center')}>
          <div className={styles.ctaBlockText}>
            <div className={cx(styles.ctaTitle, 'mrg-m mrg--b body-2 txt-b')}>
              NFT metrics
            </div>
            <div
              className={cx(styles.ctaDescription, 'mrg-xl mrg--b h2 txt-b')}
            >
              Is my NFT collection getting more popular?
            </div>
            <div
              className={cx(styles.ctaDescriptionAdd, 'mrg-m mrg--b body-1')}
            >
              Get to know how often people are mentioning your NFT Collection
            </div>
            <ReactLinkPointer class="body-2" label="Check NFT collections" href="https://app.santiment.net/s/QGPJ95dm" target='_blank' rel='noopener noreferrer' />
          </div>
        </div>
      </div>
      <div className={cx(styles.ctaStickyImgWrapper, 'row hv-center')}>
        <div
          style={{ backgroundImage: `url(${images[visibleImage]})` }}
          className={styles.ctaStickyImg}
        />
      </div>
    </div>
  )
}

export default CtaDesktop
