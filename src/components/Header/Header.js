import React, { useRef } from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { tr } from '../../utils/translate'
import mainLogo from './../../images/logos/santiment.svg'
import Products from './Products'
import AccountBtn from '../AccountBtn/AccountBtn'
import styles from './Header.module.scss'

const Header = ({
  intl,
  headerAnimation,
  logo = mainLogo,
  className = 'body-3'
}) => {
  const toggle = useRef(null)

  const closeNav = () => {
    toggle.current.checked = false
  }

  return (
    <header
      className={cx(
        styles.header,
        headerAnimation && styles.headerAnimation,
        className
      )}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.product}>
            <div className={styles.products}>
              <Link className={styles.logo} to='/'>
                <img src={logo} alt='logo' width='105px' />
              </Link>
            </div>
          </div>
        </div>
        <label htmlFor='hamburger'>
          <Icon type='hamburger' className={styles.hamburger} />
        </label>
        <input id='hamburger' type='checkbox' ref={toggle} />
        <nav className={styles.nav}>
          <label htmlFor='hamburger' className={styles.close}>
            <Icon type='close' />
          </label>
          <div className={styles.link}>
            <Products />
          </div>
          <Link className={styles.link} to='/about' onClick={closeNav}>
            {tr('header.about', 'About')}
          </Link>
          <Link className={styles.link} to='/team' onClick={closeNav}>
            {tr('header.team', 'Team')}
          </Link>
          <Link className={styles.link} to='/jobs' onClick={closeNav}>
            {tr('header.jobs', 'Jobs')}
          </Link>
          <a
            href='https://academy.santiment.net/'
            target='_blank'
            rel='noopener noreferrer'
            className={cx(styles.link, styles.right)}
          >
            Academy
            <Icon type='external-link' className={styles.external} />
          </a>
          <Link className={styles.link} to='/pricing' onClick={closeNav}>
            {tr('header.pricing', 'Pricing')}
          </Link>
        </nav>
        <AccountBtn />
      </div>
    </header>
  )
}
export default injectIntl(Header)
