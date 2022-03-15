import React, { useRef } from 'react'
import cx from 'classnames'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Icon from '@santiment-network/ui/Icon'
import SantimentProductsTooltip from '../SantimentProductsTooltip/SantimentProductsTooltip'
import AccountBtn from '../AccountBtn/AccountBtn'
import { tr } from '../../utils/translate'
import mainLogoDark from './../../images/logos/santiment-dark.svg'
import styles from './LPHeader.module.scss'

const LPHeader = ({ intl, headerAnimation }) => {
  const toggle = useRef(null)

  const closeNav = () => {
    toggle.current.checked = false
  }

  return (
    <header
      className={cx(styles.header, headerAnimation && styles.headerAnimation)}
    >
      <div className={styles.container}>
        <Link className={styles.logo} to='/'>
          <img src={mainLogoDark} alt='logo' className={styles.logo__icon} />
        </Link>
        <label htmlFor='hamburger'>
          <Icon type='hamburger' className={styles.hamburger} />
        </label>
        <input id='hamburger' type='checkbox' ref={toggle} />
        <nav className={styles.nav}>
          <label htmlFor='hamburger' className={styles.close}>
            <Icon type='close' />
          </label>
          <div className={styles.link}>
            <SantimentProductsTooltip intl={intl}>
              <div>Products</div>
            </SantimentProductsTooltip>
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
export default injectIntl(LPHeader)
