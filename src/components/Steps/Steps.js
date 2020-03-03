import React from 'react'
import { data } from './data'
import Subheading from '../Heading/Subheading'
import Heading from '../Heading/Heading'
import styles from './Steps.module.scss'

const Steps = () => (
  <>
    <Heading>How do we accomplish our goals?</Heading>
    <Subheading>
      Bringing machine effort and human <br />
      intuition together
    </Subheading>
    <ol className={styles.list}>
      {data.map(({ title, desc, points }) => (
        <li className={styles.item} key={title}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{desc}</p>
          <ul className={styles.points}>
            {points.map((item, idx) => (
              <li key={idx} className={styles.point}>
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </>
)

export default Steps
