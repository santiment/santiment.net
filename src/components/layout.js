import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import GoogleAnalytics from 'react-ga'
import Helmet from 'react-helmet'
import toReact from 'svelte-adapter/react'
import { startResponsiveController } from 'webkit/responsive'
import CookiePopup from 'webkit/ui/CookiesPopup.svelte'
import Dialogs from 'webkit/ui/Dialog/Dialogs.svelte'
import Intercom from './Intercom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Notifications from './Notifications/Notifications'
import './fonts.module.scss'
import styles from './layout.module.scss'
import 'webkit/styles/main.css'

const ReactCookiePopup = toReact(CookiePopup, {}, 'div')
const ReactDialogs = toReact(Dialogs, {}, 'div')

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
  headerComponent
}) => {
  return (
    <Intercom>
      <Notifications>
        <div className={classes.wrapper}>
          {envScript}
          {headerComponent || <Header headerAnimation={headerAnimation} />}
          <main className={cx(styles.main, classes.main)}>{children}</main>
          {/*<Delayed waitBeforeShow="1000">*/}
          <Footer />
          {/*</Delayed>*/}
        </div>
      </Notifications>
      <ReactCookiePopup />
      <ReactDialogs />
    </Intercom>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
