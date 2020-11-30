import React, { useState } from 'react'
import Masonry from 'react-responsive-masonry'
import { TweetCard, TweetsParsed } from '../Tweets'

const SETTINGS = {
  columnWidth: 380,
  height: 300,
  gutterSize: 10
}

function getColumnsCount () {
  const { columnWidth, gutterSize } = SETTINGS
  return Math.floor(window.innerWidth / (columnWidth + gutterSize))
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
