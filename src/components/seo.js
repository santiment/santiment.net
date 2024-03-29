import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import santiment from '../images/santiment.png'

function SEO ({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const imageUrl = `${site.siteMetadata.siteUrl}${santiment}`

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:image:width`,
          content: '1200'
        },
        {
          property: `og:image:height`,
          content: '678'
        },
        {
          property: `og:image`,
          content: imageUrl
        },
        {
          property: `og:image:url`,
          content: imageUrl
        },
        {
          property: `og:image:secure`,
          content: imageUrl
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: imageUrl
        },
        {
          name: `og:url`,
          content: 'https://santiment.net/'
        },
        {
          name: `og:site_name`,
          content: 'Santiment'
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
