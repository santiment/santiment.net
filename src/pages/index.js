import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Pricing from '../components/Pricing'
import styles from './index.module.scss'

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Santiment - See what other crypto traders are missing" />
    <Pricing />
  </Layout>
)

export default injectIntl(IndexPage)
