import React from "react"

export { wrapRootElement } from "./src/apollo/wrap-root-element"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="google-optimize"
      src="https://www.googleoptimize.com/optimize.js?id=OPT-TKTHGHT"
    />,
  ])
}
