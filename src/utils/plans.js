import { client } from '../apollo/client'
import { USER_PAYMENTS } from '../gql/user'

export const formatPrice = (price, name, billing) => {
  if (name === 'FREE') return ['$0']
  if (!price) return ['Custom']

  const devider = 100 * (billing === 'year' ? 12 : 1)

  return `$${parseInt(price / devider, 10)}`
}

export const SanbaseId = '2'
export const SandataId = '4'
export const SanAPIId = '1'

export const findSanbasePlan = ({ id }) => id === SanbaseId
export const findSandataPlan = ({ id }) => id === SandataId
export const findSanAPIPlan
 = ({ id }) => id === SanAPIId


export const getBilling = () =>
  client.query({ query: USER_PAYMENTS, fetchPolicy: 'network-only' })

export const getAlternativeBillingPlan = (
  plans,
  currentPlan,
  currentInterval,
) =>
  plans.find(
    ({ name, interval }) =>
      name === currentPlan && interval !== currentInterval,
  )
