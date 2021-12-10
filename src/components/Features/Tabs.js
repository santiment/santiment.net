import React, { useState, useRef } from 'react'
import cx from 'classnames'
import Slider from 'react-slick'
import { data } from './data.js'
import styles from './Tabs.module.scss'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

const Tabs = () => {
  const slider = useRef(null)
  const slickNext = () => {
    slider.current.slickNext()
  }
  const slickPrev = () => {
    slider.current.slickPrev()
  }
  const [active, setActive] = useState(data[0])
  const [animation, setAnimation] = useState(false)

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.tabs}>
          {data.map((item, index) => (
            <li
              key={index}
              className={cx(
                styles.item,
                active === item && styles.item__active
              )}
              onClick={() => {
                if (active !== item) {
                  setAnimation(true)
                  setTimeout(() => setActive(item), 200)
                  setTimeout(() => setAnimation(false), 300)
                }
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className={cx(styles.content, animation && styles.contentHide)}>
          <h4 className={styles.title}>{active.title}</h4>
          <div className={styles.desc}>{active.description}</div>
          <img className={styles.img} src={active.img} alt='' />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.slider}>
          <div
            className={cx(styles.arrow, styles.arrow_left)}
            onClick={slickPrev}
          >
            <svg
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 11L1 6L6 1'
                stroke='#181B2B'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>

          <Slider {...settings} ref={slider}>
            {data.map(item => (
              <div className={styles.content} key={item.title}>
                <h4 className={styles.title}>{item.title}</h4>
                <div className={styles.desc}>{item.description}</div>
                <img className={styles.img} src={item.img} alt='' />
              </div>
            ))}
          </Slider>

          <div
            className={cx(styles.arrow, styles.arrow_right)}
            onClick={slickNext}
          >
            <svg
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 11L6 6L1 1'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
