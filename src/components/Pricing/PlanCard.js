import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import cx from 'classnames'
import Button from '@santiment-network/ui/Button'
import Features from './Features'
import PLANS from './prices'
import { formatPrice } from '../../utils/plans'
import { tr } from '../../utils/translate'
import styles from './PlanCard.module.scss'

const toggleCardDetails = ({ currentTarget }) =>
  currentTarget.classList.toggle(styles.card_opened)

const PlanCard = ({
  intl,
  name,
  price,
  className,
  classes = {},
  btnProps
}) => {
  const card = PLANS[name]

  return (
    <div
      onClick={toggleCardDetails}
      className={cx(styles.card, className, classes.wrapper)}
    >
      <div className={cx(styles.card__top, classes.top)}>
        <h3 className={styles.card__title}>{name}</h3>
        <svg
          width='15'
          height='8'
          viewBox='0 0 15 8'
          className={styles.card__arrow}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.313 0.754539C14.5867 1.06549 14.5564 1.5394 14.2455 1.81304L7.99546 7.31304C7.71218 7.56233 7.2878 7.56233 7.00452 7.31304L0.754519 1.81304C0.443563 1.5394 0.413314 1.06549 0.686955 0.754538C0.960596 0.443582 1.43451 0.413333 1.74546 0.686974L7.49999 5.75096L13.2545 0.686974C13.5655 0.413333 14.0394 0.443583 14.313 0.754539Z'
          />
        </svg>
      </div>
      <div className={styles.price}>
        <span>from {price}</span>
        <span className={styles.period}>/ {tr('billing.month.short', 'mo')}</span>
      </div>
      <div className={styles.desc}>{card.desc}</div>
      <div className={styles.details}>
        <card.Component />
        <Button as="a" rel="noopener noreferrer" target="_blank" href={card.more} border className={styles.more}>Learn more</Button>
        <Features data={card.features} classes={{ ...styles, ...classes }} />
      </div>
    </div>
  )
}

export default injectIntl(PlanCard)
