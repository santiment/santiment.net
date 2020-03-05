import React, { useState } from 'react'
import cx from 'classnames'
import Tooltip from '@santiment-network/ui/Tooltip'
import Icon from '@santiment-network/ui/Icon'
import { Link } from 'gatsby'
import styles from './CompanyDropdown.module.scss'

const ITEMS = [
  {
    title: 'About us',
    link: '/about'
  },
  {
    title: 'Team',
    link: '/team'
  },
  {
    title: 'Jobs',
    link: '/jobs'
  }
]

const OpenTrigger = () => (
  <Icon type='arrow-down' className={styles.arrowIcon} />
)
const CloseTrigger = () => <Icon type='arrow-up' className={styles.arrowIcon} />

const CompanyDropdown = ({ className, intl, children }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Tooltip
      passOpenStateAs='isActive'
      closeTimeout={150}
      position='bottom'
      align='start'
      offsetY={7}
      className={styles.tooltip}
      trigger={
        <div className={cx(className, styles.trigger, isOpen && styles.trigger__opened)}>
          {children}
          <div className={cx(styles.arrow, isOpen && styles.opened)}>
            {isOpen ? <CloseTrigger /> : <OpenTrigger />}
          </div>
        </div>
      }
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
    >
      <div className={styles.container}>
        <ul className={styles.list}>
          {ITEMS.map(({ title, link }) => (
            <li key={title} className={styles.item}>
              <Link to={link} className={styles.link}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Tooltip>
  )
}

export default CompanyDropdown
