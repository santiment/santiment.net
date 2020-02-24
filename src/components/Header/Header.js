import React, { useRef } from 'react'
import Icon from '@santiment-network/ui/Icon'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import AccountBtn from '../AccountBtn/AccountBtn'
import { tr } from '../../utils/translate'
import mainLogo from './../../images/logos/santiment.svg'
import styles from './Header.module.scss'

const Header = ({ isAccountPage, intl }) => {
  const toggle = useRef(null)

  const closeNav = () => {
    toggle.current.checked = false
  }

  return (
    <header className={styles.header}>
      <div  className={styles.container}>
        <div className={styles.left}>

          <div className={styles.product}>
            <div className={styles.products}>
              <Link className={styles.logo} to="/">
                <img src={mainLogo} alt='logo' width="105px" />
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
          <Link className={styles.link} to='/pricing' onClick={closeNav}>
            {tr('header.pricing', "Pricing")}
          </Link>
        </nav>
      </div>
    </header>
  )
}
export default injectIntl(Header)
