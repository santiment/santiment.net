import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import WelcomeBlock from '../components/WelcomeBlock/WelcomeBlock'
import Cases from '../components/Cases/Cases'
import TestImonials from '../components/TestImonials/TestImonials'
import SEO from '../components/seo'

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Santiment - See what other crypto traders are missing" />
    <WelcomeBlock />
    <Cases />
    <TestImonials />
  </Layout>
)

export default injectIntl(IndexPage)
