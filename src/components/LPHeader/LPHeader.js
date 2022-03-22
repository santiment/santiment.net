import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import mainLogoDark from './../../images/logos/santiment-dark.svg'
import Header from '../Header/Header'

const LPHeader = ({ intl, headerAnimation }) => {
  return (
    <Header
      headerAnimation={headerAnimation}
      logo={mainLogoDark}
      className='body-3'
    />
  )
}
export default injectIntl(LPHeader)
