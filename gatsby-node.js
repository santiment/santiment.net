/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: '/sansheets', toPath: 'https://sheets.santiment.net/', isPermanent: true })
  createRedirect({ fromPath: '/sandata', toPath: 'https://data.santiment.net/', isPermanent: true })
  createRedirect({ fromPath: '/about-santiment/how-to-buy-san/', toPath: 'https://academy.santiment.net/san-tokens/how-to-buy-san/', isPermanent: true })

  createRedirect({ fromPath: '/about-santiment/team/', toPath: '/team', isPermanent: true })
  createRedirect({ fromPath: '/about-santiment/transparency/', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/about-santiment/jobs/', toPath: '/jobs', isPermanent: true })
  createRedirect({ fromPath: '/about-santiment', toPath: '/about', isPermanent: true })
  createRedirect({ fromPath: '/about-santiment/contact/', toPath: '/contact', isPermanent: true })
  createRedirect({ fromPath: '/discord', toPath: 'https://discordapp.com/invite/MPH2uP5', isPermanent: true })
  createRedirect({ fromPath: '/terms-conditions/', toPath: '/terms', isPermanent: true })
}
