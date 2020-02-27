import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import WelcomeBlock from '../components/WelcomeBlock/WelcomeBlock'
import Feed from '../components/Feed/Feed'
import Cases from '../components/Cases/Cases'
import TestImonials from '../components/TestImonials/TestImonials'
import Features from '../components/Features/Features'
import GetStarted from '../components/GetStarted/GetStarted'
import SEO from '../components/seo'
import styles from './index.module.scss'

const IndexPage = ({ intl }) => (
  <Layout classes={styles}>
    <SEO title="Santiment - See what other crypto traders are missing" />
    <WelcomeBlock />
    {/* <Feed /> */}
    <Features />
    {/* <TestImonials /> */}
    <Cases />
    <GetStarted />
  </Layout>
)

export default injectIntl(IndexPage)
