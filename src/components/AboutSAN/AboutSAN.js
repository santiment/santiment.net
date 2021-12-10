import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import Subheading from '../Heading/Subheading'
import { data } from './data'
import chart from './chart.png'
import styles from './AboutSAN.module.scss'

const AboutSAN = () => (
  <div className={styles.wrapper}>
    <Subheading className={styles.heading}>About SAN Tokens</Subheading>
    <p className={styles.desc}>
      SAN is a utility token that provides access to exclusive parts of Sanbase.
    </p>
    <Button
      className={styles.btn}
      border
      as='a'
      target='_blank'
      rel='noopener noreferrer'
      href='https://academy.santiment.net/san-tokens/how-to-buy-san/'
    >
      <Icon type='question-round-small' className={styles.icon} />
      How to buy SAN token?
    </Button>
    <p className={styles.text}>
      We expect the token economy will have three main dimensions:
    </p>

    <div className={styles.content}>
      <img className={styles.img} src={chart} alt='img' />

      {/* <ul className={styles.chart}> */}
      {/*   {data.map(({ title, who, desc }) => ( */}
      {/*     <li className={styles.circle} key={title}> */}
      {/*       <h4 className={styles.title}> */}
      {/*         {title} */}
      {/*       </h4> */}
      {/*       <div className={styles.who}>{who}</div> */}
      {/*       <div className={styles.description}>{desc}</div> */}
      {/*     </li> */}
      {/*   ))} */}
      {/* </ul> */}

      <ul className={styles.list}>
        {data.map(({ title, goal, how }) => (
          <li className={styles.item} key={title}>
            <h4 className={styles.title}>
              <span>SAN as </span>
              {title}
            </h4>
            <div className={styles.goal}>({goal})</div>
            <div className={styles.how}>{how}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default AboutSAN
