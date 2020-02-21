import React from 'react'
import { Link } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import cx from 'classnames'
import { trStr, tr } from '../../utils/translate'
import planetSvg from '../../images/planet.svg'
import styles from './Footer.module.scss'

const langProps = [
  { link: '/ja', label: '日本語' },
  { link: '/', label: 'English' },
]

const isJapanese = () =>
  typeof window === 'undefined'
    ? false
    : window.location.pathname.includes('/ja')

const categories = [
  {
    title: 'labs',
    links: [
      {
        children: 'trends',
        name: 'Social trends',
        href: 'https://app.santiment.net/labs/trends',
      },
      {
        children: 'eth',
        name: 'Eth spent',
        href: 'https://app.santiment.net/projects/ethereum',
      },
      {
        children: 'balance',
        name: 'Historical balance',
        href: 'https://app.santiment.net/labs/balance',
      },
      { children: 'charts',
        name: 'Studio',
       href: 'https://app.santiment.net'
        },
      { children: 'Sansheets',
        name: 'Sheets',
       href: 'https://santiment.net/sansheets/'
     },
    ],
  },
  {
    title: 'company',
    links: [
      { children: 'pricing',
        name: 'Pricing',
      href: 'https://santiment.net/pricing/'
       },
      { children: 'team',
        name: 'Team',
      href: 'https://santiment.net/team/'
    },
      { children: 'jobs',
        name: 'Jobs',
      href: 'https://santiment.net/jobs/'
    },
      {
        children: 'contact',
        name: 'Contact us',
        href: 'https://santiment.net/about-santiment/contact/',
      },
    ],
  },
  {
    title: 'resources',
    links: [
      { children: 'api',
        name: 'SanAPI',
      href: 'https://api.santiment.net/graphiql'
    },
      { children: 'data',
        name: 'Sandata',
      href: 'https://data.santiment.net/'
    },
      { children: 'blog',
        name: 'Insights',
      href: 'https://insights.santiment.net/'
    },
      { children: 'source',
        name: 'Source code',
      href: 'https://github.com/santiment/' },
      {
        children: 'buy',
        name: 'Buy SAN',
        href:
          'https://academy.santiment.net/san-tokens/buy-san-tokens-using-bancor/',
      },
    ],
  }
]

const Footer = ({ intl }) => {
  const { link, label } = langProps[+isJapanese()]
  const year = new Date()
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <ul className={styles.categories}>
          {categories.map(({ title, links }) => (
            <li key={title} className={styles.category}>
              {links.map(({ children, href, name = '' }, i) => (
                <a
                  key={i}
                  target='_blank'
                  rel='noopener noreferrer'
                  children={tr(`footer.${title}.${children}`, name)}
                  href={title === 'company' ? trStr(intl, `footer.${title}.${children}.link`) : href}
                  className={cx(styles.text, styles.category__item)}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div>
          <Link to={link} className={cx(styles.text, styles.link)}>
            <img alt='planet' src={planetSvg} className={styles.planet} />
            {label}
          </Link>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://santiment.net/terms-conditions/'
            className={cx(styles.text, styles.link)}
          >
            {tr('footer.terms', 'Terms')}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://app.santiment.net/privacy-policy'
            className={cx(styles.text, styles.link)}
          >
            {tr('footer.privacy', 'Privacy')}
          </a>
        </div>
        <div className={cx(styles.text, styles.rights)}>
          © {year.getFullYear()} {tr('footer.rights', 'Santiment Inc. All rights reserved')}
        </div>
      </div>
    </footer>
  )
}

export default injectIntl(Footer)
