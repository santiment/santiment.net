import React, { useEffect, useState } from 'react'
import { Device, responsive$ } from 'webkit/responsive'
import Layout from '../components/layout'
import LPHeader from '../components/LPHeader/LPHeader'
import MainBlock from '../components/MainBlock/MainBlock'
import TrustedBlock from '../components/TrustedBlock/TrustedBlock'
import Numbers from '../components/Numbers/Numbers'
import Twitter from '../components/Twitter/Twitter'
import SEO from '../components/seo'
import Cta from '../components/CTA/CTA'
import Description from '../components/Description/Description'
import About from '../components/About/About'
import styles from './index.module.scss'

const Index = ({ location }) => {
  const [isMobile, setIsMobile] = useState(false)

  const isNightMode = location.pathname === '/'

  useEffect(() => {
    return responsive$.subscribe(device => {
      setIsMobile(device !== Device.Desktop)
    })
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }

    if (isNightMode) {
      document.body.classList.add('night-mode')
    }

    if (!isMobile) {
      document.getElementById('___gatsby').style.overflowX = 'visible'
    }

    return () => {
      if (isNightMode) {
        document.body.classList.remove('night-mode')
      }

      if (!isMobile) {
        document.getElementById('___gatsby').style.overflowX = 'hidden'
      }
    }
  }, [location])

  return (
    <Layout
      headerComponent={<LPHeader headerAnimation />}
      classes={{
        wrapper: 'column justify',
        main: styles.main
      }}
    >
      <SEO title='Santiment - See what other crypto traders are missing' />
      <MainBlock />
      <TrustedBlock />
      <Description />
      <Numbers />
      <About />
      <Twitter />
      <Cta />
    </Layout>
  )
}

export default Index
