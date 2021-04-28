import React from 'react'
import PropTypes from 'prop-types'

const intercomScript = (
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/cyjjko9u';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`
    }}
  />
)

const gtagScriptLink = (
    <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-100571693-1%22%3E'
    />
)

const gtagScript = (
  <script async
    dangerouslySetInnerHTML={{
      __html: `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-100571693-1');`
    }}
  />
)

const firstPromoterScript = (
  <script async
    dangerouslySetInnerHTML={{
      __html: `  (function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://cdn.firstpromoter.com/fprom.js',t.onload=t.onreadystatechange=function(){var t=this.readyState;if(!t||"complete"==t||"loaded"==t)try{$FPROM.init("ks4svmdl",".santiment.net")}catch(t){}};var e=document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(t,e)})();`
    }}
  />
)

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
          <link rel="preconnect" href="https://api.santiment.net"/>
          <link rel="preload" href="/static/ProximaNova-Medium-bb60c435799b51088264f49d22d7c688.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="preconnect" crossOrigin="true" href="https://js.intercomcdn.com"/>
          <link rel="preconnect" crossOrigin="true" href="https://widget.intercom.io"/>
          <link rel="preload" href="/static/ProximaNova-Regular-3da7be18692d6693b842f8d673dd9e2c.woff2" as="font" type="font/woff2" crossOrigin="true" />
          <link rel="preload" href="/static/ProximaNova-Bold-12f2f5acb0986079c3bc0aa621f5c5b9.woff2" as="font" type="font/woff2" crossOrigin="true" />
          {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {intercomScript}
        {gtagScriptLink}
        {gtagScript}
        {firstPromoterScript}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
