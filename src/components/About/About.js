import React from 'react'
import cx from 'classnames'
import ReactLinkPointer from '../LinkPointer'
import CtaDesktop from './CtaDesktop/CtaDesktop'
import { useIsMobile } from '../../hooks/responsive'
import alien from './images/alien.svg'
import leftPuzzle from './images/left-puzzle.svg'
import rightPuzzle from './images/right-puzzle.svg'
import first from './images/1.png'
import second from './images/2.png'
import third from './images/3.png'
import fourth from './images/4.png'
import styles from './About.module.scss'

const About = () => {
  const { isMobile } = useIsMobile()

  return (
    <div className={cx(styles.wrapper, 'row hv-center')}>
      <div className={cx(styles.content, 'column')}>
        <div className={cx(styles.infoBlock, 'row')}>
          <div className={cx(styles.infoText, 'column')}>
            <div className={cx(styles.infoTitle, 'mrg-xl mrg--b')}>
              <span className={styles.infoTitleAdd}>Crypto analytics</span> to
              make data-driven decisions
            </div>
            <div className={cx(styles.infoDescription, 'h4')}>
              Profitable trading decisions are based on metrics and market
              analysis. Discover new investment opportunities by finding answers
              to all your trading questions.
            </div>
          </div>
          <div className={cx(styles.infoImg, 'relative')}>
            <img src={leftPuzzle} className={styles.leftPuzzle} alt='img' />
            <img src={rightPuzzle} className={styles.rightPuzzle} alt='img' />
            <img src={alien} className={styles.alien} alt='img' />
          </div>
        </div>
        {isMobile ? (
          <>
            <div className={cx(styles.ctaBlock, 'row v-center justify')}>
              <div className={styles.ctaBlockText}>
                <div
                  className={cx(styles.ctaTitle, 'mrg-m mrg--b body-2 txt-b')}
                >
                  Social metrics
                </div>
                <div
                  className={cx(
                    styles.ctaDescription,
                    'mrg-xl mrg--b h2 txt-b'
                  )}
                >
                  What are people talking about in crypto?
                </div>
                <div
                  className={cx(
                    styles.ctaDescriptionAdd,
                    'mrg-m mrg--b body-1'
                  )}
                >
                  Take a look at crypto market social trends and sentiment
                  charts
                </div>
                <ReactLinkPointer
                  class='body-2'
                  label='Get to know social trends'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://app.santiment.net/s/1PcSbMgY'
                />
              </div>
              <img className={styles.ctaImg} src={first} alt='img' />
            </div>
            <div className={cx(styles.ctaBlock, 'row v-center justify')}>
              <div className={styles.ctaBlockText}>
                <div
                  className={cx(styles.ctaTitle, 'mrg-m mrg--b body-2 txt-b')}
                >
                  On-chain metrics
                </div>
                <div
                  className={cx(
                    styles.ctaDescription,
                    'mrg-xl mrg--b h2 txt-b'
                  )}
                >
                  Are traders in profit or loss territory?
                </div>
                <div
                  className={cx(
                    styles.ctaDescriptionAdd,
                    'mrg-m mrg--b body-1'
                  )}
                >
                  Study aggregate investor behaviors as price moves to/from
                  their cost basis
                </div>
                <ReactLinkPointer
                  class='body-2'
                  label='Track market movements'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://app.santiment.net/s/ybwyoqGG'
                />
              </div>
              <img className={styles.ctaImg} src={second} alt='img' />
            </div>
            <div className={cx(styles.ctaBlock, 'row v-center justify')}>
              <div className={styles.ctaBlockText}>
                <div
                  className={cx(styles.ctaTitle, 'mrg-m mrg--b body-2 txt-b')}
                >
                  Stakeholders metrics
                </div>
                <div
                  className={cx(
                    styles.ctaDescription,
                    'mrg-xl mrg--b h2 txt-b'
                  )}
                >
                  Are whales accumulating or dumping?
                </div>
                <div
                  className={cx(
                    styles.ctaDescriptionAdd,
                    'mrg-m mrg--b body-1'
                  )}
                >
                  See asset holder distribution, top holders, and whales
                  transaction tracking tools
                </div>
                <ReactLinkPointer
                  class='body-2'
                  label='Investigate whales activities'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://app.santiment.net/s/czuEB2R6'
                />
              </div>
              <img className={styles.ctaImg} src={third} alt='img' />
            </div>
            <div className={cx(styles.ctaBlock, 'row v-center justify')}>
              <div className={styles.ctaBlockText}>
                <div
                  className={cx(styles.ctaTitle, 'mrg-m mrg--b body-2 txt-b')}
                >
                  NFT metrics
                </div>
                <div
                  className={cx(
                    styles.ctaDescription,
                    'mrg-xl mrg--b h2 txt-b'
                  )}
                >
                  Is my NFT collection getting more popular?
                </div>
                <div
                  className={cx(
                    styles.ctaDescriptionAdd,
                    'mrg-m mrg--b body-1'
                  )}
                >
                  Get to know how often people are mentioning your NFT
                  Collection
                </div>
                <ReactLinkPointer
                  class='body-2'
                  label='Check NFT collections'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://app.santiment.net/s/QGPJ95dm'
                />
              </div>
              <img className={styles.ctaImg} src={fourth} alt='img' />
            </div>
          </>
        ) : (
          <CtaDesktop />
        )}
      </div>
    </div>
  )
}

export default About
