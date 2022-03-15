export function filterSearchableItems (checkItem, searchableItems, allItems) {
  const filteredItems = []
  const filteredSearchables = []
  const { length } = allItems

  for (let i = 0; i < length; i++) {
    const item = searchableItems[i]
    if (checkItem(item)) {
      filteredSearchables.push(item)
      filteredItems.push(allItems[i])
    }
  }

  return { filteredItems, filteredSearchables }
}

const addressChecker = regexp => address => regexp.test(address)

const isEthAddress = addressChecker(/^0x[a-fA-F0-9]{40}$/)
const isBtcAddress = addressChecker(/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/)

const isBtcSegwitAddress = addressChecker(
  /\b(bc(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})|[13][a-km-zA-HJ-NP-Z1-9]{25,35})\b/
)

const isLTCAddress = addressChecker(/(?:^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$)/)

const isBCHAddress = address => {
  return (
    addressChecker(/(?:^[13][a-km-zA-HJ-NP-Z1-9]{33}$)/)(address) ||
    addressChecker(/(?:^((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41})/)(
      address
    )
  )
}

const isXRPAddress = addressChecker(/(?:^r[0-9a-zA-Z]{24,34}$)/)

export const Infrastructure = {
  ETH: 'ETH',
  BTC: 'BTC',

  XRP: 'XRP',
  LTC: 'LTC',
  BCH: 'BCH'
}

export function getAddressInfrastructure (address) {
  if (isEthAddress(address)) {
    return Infrastructure.ETH
  }

  if (isBtcAddress(address) || isBtcSegwitAddress(address)) {
    return Infrastructure.BTC
  }

  if (isLTCAddress(address)) {
    return Infrastructure.LTC
  }

  if (isBCHAddress(address)) {
    return Infrastructure.BCH
  }

  if (isXRPAddress(address)) {
    return Infrastructure.XRP
  }
}
