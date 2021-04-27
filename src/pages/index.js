import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Delayed from "../components/Delayed"
import Cases from '../components/Cases/Cases'
import Testimonails from '../components/Testimonials'
import Features from '../components/Features/Features'
import Products from '../components/Products/Products'
import Companies from '../components/Companies/Companies'
import GetStarted from '../components/GetStarted/GetStarted'
import WelcomeBlock from '../components/WelcomeBlock/WelcomeBlock'
import TwitterFeedbacks from '../components/TwitterFeedbacks/TwitterFeedbacks'
import styles from './index.module.scss'

const IndexPage = ({ intl }) => (
    <Layout classes={styles}>
        <SEO title="Santiment - See what other crypto traders are missing" />
        <WelcomeBlock />
        <Cases />
        <Features />
        <Products />
        <Companies />
        <Testimonails />
        <Delayed waitBeforeShow="3000">
            <TwitterFeedbacks />
            <GetStarted />
        </Delayed>
    </Layout>
)

export default injectIntl(IndexPage)
