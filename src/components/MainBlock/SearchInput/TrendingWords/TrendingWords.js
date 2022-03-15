import React, { useMemo } from 'react'
import Category, { Button } from '../Category'
import cx from 'classnames'
import styles from '../Category.module.scss'
import Icon from '@santiment-network/ui/Icon'

const TREND_LINK = 'https://app.santiment.net/labs/trends/explore/'

const propsAccessor = ({ word, key = word, As }) => ({
  key,
  As,
  to: TREND_LINK + word
})

function trendingWordsPredicate (value) {
  const searchTerm = value.toLowerCase()
  return ({ word }) => word.includes(searchTerm)
}

const TrendingWord = ({ word }) => word

const Lookup = ({ trend, className }) => (
  <Button to={TREND_LINK + trend} className={cx(className, styles.lookup)}>
    <Icon type='fire' className={styles.icon} />
    Lookup as a trend
  </Button>
)

const buildLookupSuggestion = searchTerm => ({
  key: '__lookup__',
  As: ({ className }) => <Lookup trend={searchTerm} className={className} />
})

const TrendingWords = ({ getTrendingWords, searchTerm, ...props }) => {
  const trendingWords = useMemo(
    () => (getTrendingWords[0] ? getTrendingWords[0].topWords : []),
    [getTrendingWords]
  )
  const suggestions = useMemo(
    () =>
      trendingWords
        .filter(trendingWordsPredicate(searchTerm))
        .concat(buildLookupSuggestion(searchTerm))
        .slice(0, 5),
    [searchTerm]
  )

  return (
    <Category
      {...props}
      title='Trending words'
      items={suggestions}
      Item={TrendingWord}
      propsAccessor={propsAccessor}
    />
  )
}

export default TrendingWords
