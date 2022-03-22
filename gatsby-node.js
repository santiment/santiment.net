/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const webpack = require('webpack')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: '/sansheets',
    toPath: 'https://sheets.santiment.net/',
  })
  createRedirect({ fromPath: '/sandata', toPath: '/' })
  createRedirect({
    fromPath: '/about-santiment/how-to-buy-san/',
    toPath: 'https://academy.santiment.net/san-tokens/how-to-buy-san/',
  })

  createRedirect({ fromPath: '/about-santiment/team/', toPath: '/team' })
  createRedirect({ fromPath: '/about-santiment/transparency/', toPath: '/' })
  createRedirect({ fromPath: '/about-santiment/jobs/', toPath: '/jobs' })
  createRedirect({ fromPath: '/about-santiment', toPath: '/about' })
  createRedirect({ fromPath: '/about-santiment/contact/', toPath: '/contact' })
  createRedirect({
    fromPath: '/discord',
    toPath: 'https://discord.gg/xyJzfkyYbr',
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({ fromPath: '/terms-conditions/', toPath: '/terms' })

  createRedirect({
    fromPath: '/get-santiment-insights-bitfinex',
    toPath: 'https://partners.santiment.net/get-santiment-insights-bitfinex',
  })

  createRedirect({
    fromPath: '/learn-more-about-santiment-bitfinex',
    toPath:
      'https://partners.santiment.net/learn-more-about-santiment-bitfinex',
  })

  createRedirect({
    fromPath: '/santiment-free-trial-bitfinex',
    toPath: 'https://partners.santiment.net/santiment-free-trial-bitfinex',
  })

  createRedirect({
    fromPath: '/santiment-bitfinex-free-trial-extension',
    toPath:
      'https://partners.santiment.net/santiment-bitfinex-free-trial-extension',
  })

  createRedirect({
    fromPath: '/santiment-bitfinex-survey',
    toPath: 'https://partners.santiment.net/santiment-bitfinex-survey',
  })

  createRedirect({
    fromPath: '/santiment-bitfinex-webinar',
    toPath: 'https://partners.santiment.net/santiment-bitfinex-webinar',
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        webkit: path.resolve('node_modules/san-webkit/lib'),
        react: path.resolve('node_modules/react'),
      },
    },

    module: {
      rules: [
        {
          test: /\.svelte/,
          use: {
            loader: 'svelte-loader',
          },
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.MEDIA_PATH': JSON.stringify('/static/webkit'),
        'process.env.ICONS_PATH': JSON.stringify('/static/webkit/icons'),
      }),
    ],
  })
}
