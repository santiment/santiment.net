const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/var/www/san/santiment.net/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/var/www/san/santiment.net/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/var/www/san/santiment.net/src/pages/index.js"))),
  "component---src-pages-thankyou-js": hot(preferDefault(require("/var/www/san/santiment.net/src/pages/thankyou.js")))
}

