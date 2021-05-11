/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import GoogleAnalytics from 'react-ga'
import Intercom from './Intercom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Notifications from './Notifications/Notifications'
import CookiePopup from './CookiePopup/CookiePopup'
import Helmet from 'react-helmet'
import Delayed from "./Delayed";
import './fonts.module.scss'
import styles from './layout.module.scss'

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

const Layout = ({ children, headerAnimation = false, classes = {} }) => (
    <Intercom>
      <Notifications>
        <div>
          {envScript}
          <Header headerAnimation={headerAnimation} />
          <main className={cx(styles.main, classes.main)}>{children}</main>
            {/*<Delayed waitBeforeShow="1000">*/}
                <Footer />
            {/*</Delayed>*/}
        </div>
      </Notifications>
      <CookiePopup />
    </Intercom>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
