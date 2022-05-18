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
        '@src': path.resolve('src'),
        webkit: path.resolve('node_modules/san-webkit/lib'),
        studio: path.resolve('node_modules/san-studio/lib'),
        react: path.resolve('node_modules/react'),
        'react-dom': path.resolve('node_modules/react-dom'),
        'react-apollo': path.resolve('node_modules/react-apollo/'),
        '@apollo/react-hooks': path.resolve('node_modules/@apollo/react-hooks'),
        '@apollo/react-common': path.resolve(
          'node_modules/@apollo/react-common'
        ),
        'apollo-client': path.resolve('node_modules/apollo-client'),
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

        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, './node_modules/sanbase/src')],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          ],
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
