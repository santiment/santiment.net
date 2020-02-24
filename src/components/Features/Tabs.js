import React, { useState } from 'react'
import cx from 'classnames'
import { data } from './data.js'
import styles from './Tabs.module.scss'

const Tabs = () => {
  const [active, setActive] = useState(data[0])
  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs}>
        {data.map(item => (
          <li
            className={cx(styles.item, active === item && styles.item__active)}
            onClick={() => setActive(item)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className={styles.content}>
        <h4 className={styles.title}>{active.title}</h4>
        <div className={styles.desc}>{active.description}</div>
        <img className={styles.img} src={active.img} />
      </div>
    </div>
  )
}

export default Tabs
