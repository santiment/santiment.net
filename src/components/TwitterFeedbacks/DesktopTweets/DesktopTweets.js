import React, { useState } from 'react'
import Masonry from 'react-responsive-masonry'
import { TweetCard, TweetsParsed } from '../Tweets'

const SETTINGS = {
  columnWidth: 360,
  height: 300,
  gutterSize: 16
}

function getColumnsCount () {
  const { columnWidth, gutterSize } = SETTINGS
  let screenWidth = 0
  if (typeof window !== 'undefined') {
    screenWidth = window.innerWidth > 1140 ? 1140 : window.innerWidth
  }

  return Math.floor(screenWidth / (columnWidth + gutterSize)) || 1
}

const DesktopTweets = () => {
  const [columnsCount] = useState(() => getColumnsCount())

  return (
    <Masonry columnsCount={columnsCount} gutter={'24px'}>
      {TweetsParsed.map((item, index) => (
        <TweetCard item={item} key={index} />
      ))}
    </Masonry>
  )
}

export default DesktopTweets
