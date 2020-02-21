import React from 'react'
import cx from 'classnames'
import { Query } from 'react-apollo'
import Toggle from '@santiment-network/ui/Toggle'
import TokensTooltip from './TokensTooltip'
import PayWithCrypto from './PayWithCrypto'
import { PLANS_QUERY } from '../../gql/plans'
import Plan from './Plan'
import {
  findSanAPIPlan,
  findSanbasePlan,
  findSandataPlan,
  formatPrice
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
    <Query query={PLANS_QUERY}>
      {({ data: { productsWithPlans = [] } }) => {
        const Sanbase = productsWithPlans.find(findSanbasePlan)
        const Sandata = productsWithPlans.find(findSandataPlan)
        const SanAPI = productsWithPlans.find(findSanAPIPlan)

        let SanAPIPrice, SandataPrice

        if (SanAPI) {
          const SanAPIPlans =
            (SanAPI.plans || [])
              .filter(
                ({ amount, interval, isDeprecated }) =>
                  interval === billing && amount > 0 && !isDeprecated
              )
              .sort(({ id: a }, { id: b }) => a - b) || []

          const { amount, name } = SanAPIPlans[0]

          SanAPIPrice = formatPrice(amount, name, billing)
        }

        if (Sandata) {
          const SandataPlans =
            (Sandata.plans || [])
              .filter(
                ({ amount, interval, isDeprecated }) =>
                  interval === billing && amount > 0 && !isDeprecated
              )
              .sort(({ id: a }, { id: b }) => a - b) || []

          const { amount, name } = SandataPlans[0]

          SandataPrice = formatPrice(amount, name, billing)
        }

        const SanbasePrice = '$0'
        console.log(Sandata)

        return (
          <>
            <div className={cx(styles.billing, classes.billing)}>
              <Billing selected={billing} onClick={setBilling} />
            </div>
            <TokensTooltip />

            <div className={cx(styles.cards, classes.cards)}>
              <Plan name='Sanbase' price={SanbasePrice} />
              <Plan name='Sandata' price={SandataPrice} />
              <Plan name='SanAPI' price={SanAPIPrice} />
            </div>
            <PayWithCrypto />
          </>
        )
      }}
    </Query>
  )
}
