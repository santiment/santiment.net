import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import Icon from '@santiment-network/ui/Icon'
import DesktopTweets from './DesktopTweets/DesktopTweets'
import { TweetCard, TweetsParsed } from './Tweets'
import Testimonials from "../Testimonials";
import styles from './TwitterFeedbacks.module.scss'

export const SLIDER_SETTINGS = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

const OPTIONS = {
  threshold: 0
}

export const useSlider = () => {
  const slider = useRef(null)
  const slickNext = () => {
    slider.current.slickNext()
  }
  const slickPrev = () => {
    slider.current.slickPrev()
  }

  return { slider, slickNext, slickPrev }
}

const TwitterBg = ({ className }) => (
  <Icon type='twitter' className={className} />
)

const TwitterFeedbacks = () => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const cbFunc = entries => {
    const [entry] = entries
    if (!isVisible && entry.isIntersecting) {
      setIsVisible(true)
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      document.body.appendChild(script)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(cbFunc, OPTIONS)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, OPTIONS])

  const { slider } = useSlider()

  return (
    <div ref={containerRef}>
      <Testimonials />
      <div className={styles.container}>
        <div className={styles.header}>
          <TwitterBg className={styles.headerBg} />
          <div className={styles.title}>
            <TwitterBg className={styles.twitterBlue} />
            More reviews from Twitter
          </div>
        </div>
            <div className={styles.list}>
              <DesktopTweets />
            </div>
            <div className={styles.slider}>
              <Slider {...SLIDER_SETTINGS} ref={slider}>
                {TweetsParsed.map((item, index) => (
                  <TweetCard item={item} key={index} />
                ))}
              </Slider>
            </div>
    </div>
    </div>
  )
}

export default TwitterFeedbacks
