/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export { wrapRootElement } from './src/apollo/wrap-root-element'

const activateOptimize = () => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'optimize.activate' })
}

export const onRouteUpdate = () => {
  activateOptimize()
}
