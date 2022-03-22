import React, { useEffect, useRef, useState } from 'react'
import icon1 from './icons/icon-1.svg'
import icon2 from './icons/icon-2.svg'
import icon3 from './icons/icon-3.svg'
import icon4 from './icons/icon-4.svg'
import icon5 from './icons/icon-5.svg'
import icon6 from './icons/icon-6.svg'
import icon7 from './icons/icon-7.svg'
import icon8 from './icons/icon-8.svg'
import icon9 from './icons/icon-9.svg'
import styles from './Background.module.scss'

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9]

function getArrayElMiddleCoef (curr, middle) {
  const coef = 100 - Math.round((curr * 90) / middle)

  if (coef === 0) {
    return 1
  }

  return coef
}

function getItemsArray (middleItem) {
  let counter = 1
  return (item, idx) => {
    if (middleItem && idx + 1 === middleItem) {
      counter = idx + 1
      return idx + 1
    }

    if (middleItem && idx + 1 > middleItem) {
      counter = counter - 1

      return counter
    }

    return idx + 1
  }
}

const Background = () => {
  const blockRef = useRef()
  const [cols, setCols] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (blockRef.current && cols.length === 0) {
      const { width, height } = blockRef.current.getBoundingClientRect()

      const itemsByWidth = Math.floor(width / 24)
      const itemsByHeight = Math.floor(height / 24)
      const middleItem = Math.floor((itemsByWidth + 1) / 2)

      const colsArray = Array.apply(null, Array(itemsByWidth)).map(
        getItemsArray(middleItem)
      )

      const rowsArray = Array.apply(null, Array(itemsByHeight)).map(
        getItemsArray()
      )

      setRows(rowsArray)
      setCols(colsArray)
    }
  }, [blockRef])

  const middleItem = cols.length > 0 ? cols[Math.floor(cols.length / 2)] : 1

  return (
    <div ref={blockRef} className={styles.wrapper}>
      {cols.map(col => {
        const rowTest = getArrayElMiddleCoef(col, middleItem)
        const rowsByCoef = rows.slice(
          0,
          Math.round(
            ((rows.length + 1) *
              rowTest *
              ((Math.floor(Math.random() * (100 - 30 + 1)) + 30) / 100)) /
              100
          )
        )
        const animationDelay = `${(Math.floor(Math.random() * 15) + 1) / 10}s`

        return (
          <div key={col} className={styles.col} style={{ animationDelay }}>
            {rowsByCoef.map((row, idx) => {
              const randomIconIndex = Math.floor(Math.random() * icons.length)
              const opacity = ((idx + 1) * 100) / rowsByCoef.length / 100

              return (
                <div key={row} className={styles.iconWrapper}>
                  <img
                    style={{
                      opacity: opacity
                    }}
                    src={icons[randomIconIndex]}
                    alt=''
                    className={styles.icon}
                  />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Background
