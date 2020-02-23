import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Santiment - See what other crypto traders are missing" />
  </Layout>
)

export default injectIntl(IndexPage)
