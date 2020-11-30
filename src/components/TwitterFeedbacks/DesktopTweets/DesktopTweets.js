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
  return Math.floor(window.innerWidth / (columnWidth + gutterSize)) || 1
}

const DesktopTweets = () => {
  const [columnsCount, setColumnsCount] = useState(() => getColumnsCount())

  function _calculateColumnCount () {
    const newCount = getColumnsCount()
    console.log(newCount)

    if (newCount !== columnsCount) {
      setColumnsCount(newCount)
    }
  }

  const _onResize = useCallback(
    () => {
      _calculateColumnCount()
    },
    [_calculateColumnCount]
  )

  useEventListener('resize', _onResize)

  return (
    <Masonry columnsCount={columnsCount} gutter={'24px'}>
      {TweetsParsed.map((item, index) => (
        <TweetCard item={item} key={index} />
      ))}
    </Masonry>
  )
}

export default DesktopTweets
