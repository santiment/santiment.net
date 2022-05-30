import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import GoogleAnalytics from 'react-ga'
import Helmet from 'react-helmet'
import { track } from 'webkit/analytics'
import { initTwitterPixel } from 'webkit/analytics/twitter'
import { startResponsiveController } from 'webkit/responsive'
import Intercom from './Intercom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Notifications from './Notifications/Notifications'
import CookiePopup from './CookiePopup/CookiePopup'
import './fonts.module.scss'
import styles from './layout.module.scss'
import 'webkit/styles/main.css'

if (typeof window !== 'undefined') {
  startResponsiveController()
}

if (process.env.NODE_ENV === 'production') {
  GoogleAnalytics.initialize('UA-100571693-8')
} else {
  GoogleAnalytics.initialize('UA-100571693-8', { testMode: true })
}

const envScript = process.env.NODE_ENV === 'production' && (
  <Helmet>
    <script src='/env.js' />
  </Helmet>
)

const Layout = ({
  children,
  headerAnimation = false,
  classes = {},
  headerComponent,
  isNightMode
}) => {
  useEffect(() => {
    initTwitterPixel()
    track.pageview('santiment.net')
  }, [])

  return (
    <Intercom>
      <Notifications>
        <div className={classes.wrapper}>
          {envScript}
          {headerComponent || <Header headerAnimation={headerAnimation} />}
          <main className={cx(styles.main, classes.main)}>{children}</main>
          {/*<Delayed waitBeforeShow="1000">*/}
          <Footer isNightMode={isNightMode} />
          {/*</Delayed>*/}
        </div>
      </Notifications>
      <CookiePopup />
    </Intercom>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
