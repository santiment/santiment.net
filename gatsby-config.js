module.exports = {
  siteMetadata: {
    title: `Crypto Research, Data, Tools - Explore Behavioral Analytics`,
    description: `We provide tools for crypto research to analyze markets and find data-driven opportunities to optimize your investing. Dive in and explore our on-chain, social and development data.`,
    author: `Santiment`,
    siteUrl: 'https://santiment.net',
    siteName: 'Santiment',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ja`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        // redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['BACKEND_URL'],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Santiment`,
        short_name: `Santiment`,
        start_url: `/`,
        background_color: `#14c393`,
        theme_color: `#14c393`,
        display: `minimal-ui`,
        icon: `src/images/logo-SAN.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-client-side-redirect`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
