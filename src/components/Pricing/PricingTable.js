import React from 'react'
import { Query } from 'react-apollo'
import cx from 'classnames'
import Toggle from '@santiment-network/ui/Toggle'
import { CURRENT_USER_QUERY } from '../../gql/user'
import { PLANS_QUERY } from '../../gql/plans'
import TokensTooltip from './TokensTooltip'
import Plan from './Plan'
import {
  findSheetsPlan,
  getCurrentSheetsSubscription,
  noBasicPlan
} from '../../utils/plans'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

const Billing = ({ selected, onClick }) => {
  const isYearSelected = selected === 'year'
  return (
    <>
      <span
        onClick={() => onClick('month')}
        className={cx(
          styles.billing__option,
          !isYearSelected && styles.billing__option_active
        )}
      >
        {tr('pricing.bill.month', 'Bill monthly')}
      </span>
      <Toggle
        className={styles.billing__toggle}
        isActive={isYearSelected}
        onClick={() => onClick(isYearSelected ? 'month' : 'year')}
      />
      <span
        className={cx(
          styles.billing__option,
          styles.billing__option_year,
          isYearSelected && styles.billing__option_active
        )}
        onClick={() => onClick('year')}
      >
        {tr('pricing.bill.year', 'Bill yearly')}
        <span className={styles.billing__save}>
          {tr('pricing.bill.year.save', 'save 10%!')}
        </span>
      </span>
    </>
  )
}

export default ({ classes = {}, onDialogClose }) => {
  const [billing, setBilling] = React.useState('year')
  return (
    <>
      <div className={cx(styles.billing, classes.billing)}>
        <Billing selected={billing} onClick={setBilling} />
      </div>
      <TokensTooltip />
    </>
  )
}
