import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Subheading from '../components/Heading/Subheading'
import styles from './cookies.module.scss'

const CookiesPage = () => (
  <Layout>
    <SEO
      title='Santiment Cookies Policy'
      description='Santiment GmbH, ("Company") collects anonymous data from cookies in accordance with applicable laws and regulations, in particular the Swiss Federal Act on Data Protection ("FADP") and the General Data Protection Regulation (EU/2016/679) (General Data Protection Regulation, "GDPR"), both defined as "privacy regulations".'
    />
    <div className={styles.wrapper}>
      <Subheading>Cookies Policy</Subheading>
      <div className={styles.desc}>
        <div className={styles.descFirstLine}>
          Santiment GmbH, ("Company") collects anonymous data from cookies in
          accordance with{' '}
        </div>
        applicable laws and regulations, in particular the Swiss Federal Act on
        Data Protection (<span className={styles.descExpl}>"FADP"</span>) and
        the General Data Protection Regulation (EU/2016/679) (General Data
        Protection Regulation, <span className={styles.descExpl}>"GDPR"</span>),
        both defined as{' '}
        <span className={styles.descExpl}>"privacy regulations"</span>.
      </div>
      <div className={styles.content}>
        <h2>Definitions</h2>
        <p>
          No, those cookies are not sweet. In fact cookies are small text files
          that websites can put on a computer or mobile device to track who
          comes to the website. The cookie helps the website recognise when that
          device revisits the website. Cookies set by the website operator are
          called "first party cookies". Cookies set by parties other than the
          website operator are called "third party cookies".
        </p>
        <h3>There are four types of cookies:</h3>
        <p>
          Strictly Necessary Cookies: those which cannot be switched off and are
          needed to have the website working correctly.
        </p>
        <p>
          Performance/Analytics Cookies: which collects anonymous data and are
          used to measure and improve the performance of a website.
        </p>
        <p>
          Functionality Cookies: which remember the choices you make on our
          website (e.g., country or language selection) for next visit.
        </p>
        <p>
          Targeting/Advertising Cookies: which are specifically designed to
          gather information from you on your device to display advertisements
          to you based on relevant topics that interest you, someone likes it,
          someone not.
        </p>
        <h2>Cookies used by our website</h2>
        <p>
          Beside Strictly Necessary Cookies, we use only Performance/Analytics
          Cookies; and Functionality Cookies. We do not use
          Targeting/Advertising Cookies. The cookies used are listed below:
        </p>
        <h3>Own cookies</h3>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Name of the cookie</th>
              <th>Function of the cookie</th>
              <th>Retention</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            <tr>
              <td>Santiment cookie</td>
              <td>
                necessary for the website to function and cannot be switched off
                in our systems.
              </td>
              <td>30 days</td>
            </tr>
          </tbody>
        </table>
        <h3>Third party cookies</h3>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Name of the cookie</th>
              <th>Function of the cookie</th>
              <th>Retention</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            <tr>
              <td>Intercom</td>
              <td>
                <a
                  href='https://www.intercom.com/legal/cookie-policy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.intercom.com/legal/cookie-policy
                </a>
              </td>
              <td>According to third party policy</td>
            </tr>
            <tr>
              <td>Google analytics</td>
              <td>
                <a
                  href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
                </a>
              </td>
              <td>According to third party policy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
)

export default CookiesPage
