import React, { useRef } from 'react'
import Icon from '@santiment-network/ui/Icon'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { tr } from '../../utils/translate'
import mainLogo from './../../images/logos/santiment.svg'
import SantimentProductsTooltip from '../SantimentProductsTooltip/SantimentProductsTooltip'
import CompanyDropdown from '../CompanyDropdown/CompanyDropdown'
import styles from './Header.module.scss'

const Header = ({ isAccountPage, intl }) => {
  const toggle = useRef(null)

  const closeNav = () => {
    toggle.current.checked = false
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.product}>
            <div className={styles.products}>
              <Link className={styles.logo} to='/'>
                <img src={mainLogo} alt='logo' width='105px' />
              </Link>
            </div>
          </div>
        </div>
        <label htmlFor='hamburger'>
          <Icon type='hamburger' />
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
          <Link className={styles.link} to='/pricing' onClick={closeNav}>
            {tr('header.pricing', 'Pricing')}
          </Link>
          <a href="https://academy.santiment.net/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Academy
            <Icon type="external-link" className={styles.external} />
          </a>
          <div className={styles.link}>
            <CompanyDropdown intl={intl}>
              <div>Company</div>
            </CompanyDropdown>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default injectIntl(Header)
