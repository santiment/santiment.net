import React, { useEffect } from 'react'
import cx from 'classnames'
import styles from './Category.module.scss'

const Title = props => <h3 className={styles.title} {...props} />

const Link = props => <a href={props.to} {...props} />

export const Button = ({ className, As = Link, isCursored, ...props }) => {
  return (
    <As
      {...props}
      className={cx(
        styles.button,
        className,
        isCursored && styles.button_cursored
      )}
    />
  )
}

const Category = ({
  className,
  title,
  titleKey = title,
  items,
  Item,
  cursor: { row: cursorRow, columnName },
  propsAccessor,
  isLoading,
  registerCursorColumn,
  onSuggestionSelect
}) => {
  const isCursoredColumn = columnName === titleKey

  useEffect(() => registerCursorColumn(titleKey, items), [items])
  useEffect(() => () => registerCursorColumn(titleKey, []), [])

  function buildItemMouseDownHandler (item) {
    return e => {
      e.preventDefault()
      onSuggestionSelect(e.currentTarget, item, titleKey)
    }
  }

  return (
    <div className={cx(styles.category, className)}>
      <Title>
        {title}
        {isLoading && <div className={styles.loader} />}
      </Title>
      {items.map((item, i) => (
        <Button
          {...propsAccessor(item)}
          isCursored={isCursoredColumn && i === cursorRow}
          onClick={buildItemMouseDownHandler(item)}
        >
          <Item {...item} key={i} />
        </Button>
      ))}
    </div>
  )
}

export default Category
