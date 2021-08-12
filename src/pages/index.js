import React, { useEffect } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Cases from '../components/Cases/Cases'
import Features from '../components/Features/Features'
import Products from '../components/Products/Products'
import Companies from '../components/Companies/Companies'
import GetStarted from '../components/GetStarted/GetStarted'
import WelcomeBlock from '../components/WelcomeBlock/WelcomeBlock'
import Feedbacks from '../components/Feedbacks'
import styles from './index.module.scss'

const IndexPage = ({ intl, location }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0)
        }
    }, [location])

    return (
        <Layout classes={styles} headerAnimation>
            <SEO title="Santiment - See what other crypto traders are missing" />
            <WelcomeBlock />
            <Cases />
            <Features />
            <Products />
            <Companies />
            <Feedbacks />
            <GetStarted />
        </Layout>
    )
}

export default injectIntl(IndexPage)
