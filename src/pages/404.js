import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Subheading from '../components/Heading/Subheading'
import styles from './404.module.scss'

const NotFoundPage = ({ location: { pathname } }) => {
  console.log(pathname)
  if (pathname.includes('blog')) {
    console.log('yes')
    window.location.href = `https://partners.santiment.net${pathname}`
    return null
  } else {
    console.log('no')
    return (
      <Layout>
        <SEO title='404: Not found' />
        <div className={styles.wrapper}>
          <Subheading className={styles.title}>Not found</Subheading>
          <p className={styles.desc}>
            You just hit a route that doesn&#39;t exist... the sadness.
          </p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
