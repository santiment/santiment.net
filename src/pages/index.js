import React, { useEffect } from 'react'
import Layout from '../components/layout'
import LPHeader from '../components/LPHeader/LPHeader'
import MainBlock from '../components/MainBlock/MainBlock'
import TrustedBlock from '../components/TrustedBlock/TrustedBlock'
import SEO from '../components/seo'
import styles from './index.module.scss'

const Index = ({ location }) => {
  const isNightMode = location.pathname === '/'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }

    if (isNightMode) {
      document.body.classList.add('night-mode')
    }
  }, [location])

  return (
    <Layout
      isNightMode={isNightMode}
      headerComponent={<LPHeader headerAnimation />}
      classes={styles}
    >
      <SEO title='Santiment - See what other crypto traders are missing' />
      <MainBlock />
      <TrustedBlock />
    </Layout>
  )
}

export default Index
