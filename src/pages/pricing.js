import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/GetStarted/GetStarted'
import Pricing from '../components/Pricing'

const PricingPage = ({ intl }) => (
  <Layout>
    <SEO title="Santiment Pricing" description='Analyze crypto assets from multiple angles, and react to developing shifts in market sentiment and network trends.' />
    <Pricing />
    <GetStarted />
  </Layout>
)

export default injectIntl(PricingPage)
