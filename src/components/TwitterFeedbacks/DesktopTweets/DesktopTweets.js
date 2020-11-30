import React, { useCallback, useState } from 'react'
import Masonry from 'react-responsive-masonry'
import { useEventListener } from '../../../hooks/eventListeners'
import { TweetCard, TweetsParsed } from '../Tweets'

const SETTINGS = {
  columnWidth: 380,
  height: 300,
  gutterSize: 10
}

function getColumnsCount () {
  const { columnWidth, gutterSize } = SETTINGS
  let screenWidth = 0
  if (typeof window !== 'undefined') {
    screenWidth = window.innerWidth
  }

  return Math.floor(screenWidth / (columnWidth + gutterSize)) || 1
}

const DesktopTweets = () => {
  const [columnsCount, setColumnsCount] = useState(() => getColumnsCount())

  function _calculateColumnCount () {
  const newCount = getColumnsCount()

    if (newCount !== columnsCount) {
      setColumnsCount(newCount)
    }
  }

  return (
    <Masonry columnsCount={columnsCount} gutter={'24px'}>
      {TweetsParsed.map((item, index) => (
        <TweetCard item={item} key={index} />
      ))}
    </Masonry>
  )
}

export default DesktopTweets
