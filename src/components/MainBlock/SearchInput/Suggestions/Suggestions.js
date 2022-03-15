import React, { useEffect } from 'react'
import cx from 'classnames'
import withSizes from 'react-sizes'
import { CSSTransition } from 'react-transition-group'
import AssetsCategory from './Assets/AssetsCategory'
import WalletsCategory from './WalletsCategory'
import TrendingWordsCategory from './TrendingWords/TrendingWordsCategory'
import InsightsCategory from './Insights/InsightsCategory'
import PeopleCategory from './People/PeopleCategory'
import styles from './Suggestions.module.scss'

export const mapSizesToProps = ({ width, height }) => ({
  isDesktop: width > 768 && height > 500,
  isLaptop: width <= 1200 && width > 992,
  isTablet: width <= 992 && width > 768,
  isPhone: width <= 768,
  isSmallPhone: width < 480
})

const Suggestions = ({
  suggestionsRef,
  isOpened,
  isTablet,
  isLaptop,
  ...props
}) => {
  useEffect(() => {
    const dropdown = suggestionsRef.current
    if (isOpened && dropdown) {
      const { parentNode } = dropdown

      const dropdownWidth = dropdown.offsetWidth
      const availableWidth =
        parentNode.clientWidth +
        parseFloat(getComputedStyle(parentNode).marginLeft)

      dropdown.style.minWidth =
        (dropdownWidth > availableWidth ? dropdownWidth : availableWidth) + 'px'

      const isSmallScreen = isTablet || isLaptop

      dropdown.style.right = isSmallScreen
        ? availableWidth + 40 + 'px'
        : availableWidth / 2 + 'px'
    }
  }, [isOpened])

  return (
    <CSSTransition in={isOpened} timeout={500} classNames={styles}>
      <div
        ref={suggestionsRef}
        className={cx(styles.dropdown, styles.exitDone)}
      >
        <AssetsCategory {...props} />
        <WalletsCategory {...props} />
        <TrendingWordsCategory {...props} />
        <InsightsCategory {...props} />
        <PeopleCategory {...props} />
      </div>
    </CSSTransition>
  )
}

export default withSizes(mapSizesToProps)(Suggestions)
