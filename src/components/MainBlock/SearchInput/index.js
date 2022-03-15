import React, { useEffect, useState, useRef } from 'react'
import UISearch from '@santiment-network/ui/Search'
import Suggestions from './Suggestions'
import { useCursorNavigation } from './navigation'
import styles from './index.module.scss'

const EDITABLE_TAGS = new Set(['INPUT', 'TEXTAREA'])

const Search = () => {
  const inputRef = useRef()
  const [isOpened, setIsOpened] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { onKeyDown, ...props } = useCursorNavigation(
    isOpened,
    onSuggestionSelect
  )

  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    function onKeyPress (e) {
      const { code, target } = e

      if (
        code === 'Slash' &&
        !EDITABLE_TAGS.has(target.tagName) &&
        !target.isContentEditable
      ) {
        e.preventDefault()
        openSuggestions()
        input.focus()
      }
    }

    window.addEventListener('keypress', onKeyPress)
    return () => window.removeEventListener('keypress', onKeyPress)
  }, [])

  function openSuggestions () {
    setIsOpened(true)
  }

  function closeSuggestions () {
    setIsOpened(false)
  }

  function onSuggestionSelect (node) {
    const href = node.getAttribute('href')

    closeSuggestions()

    if (href.startsWith('http')) {
      window.location.href = href
    }
  }

  return (
    <UISearch
      className={styles.search}
      inputClassName={styles.input}
      iconClassName={styles.icon}
      forwardedRef={inputRef}
      placeholder='Search for assets, trends, etc...'
      autoComplete='off'
      onChange={v => setSearchTerm(v)}
      onClick={openSuggestions}
      onKeyDown={onKeyDown}
    >
      <Suggestions
        {...props}
        searchTerm={searchTerm}
        isOpened={isOpened}
        onSuggestionSelect={onSuggestionSelect}
        closeSuggestions={closeSuggestions}
      />
    </UISearch>
  )
}

export default Search
