import React from 'react'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../gql/user'

const updateIntercom = () => {
  if (typeof window !== 'undefined') {
    window.Intercom('update')

    // Wait for the iframe to become ready (max 30 seconds)
    const timeout = setTimeout(() => clearInterval(interval), 30000)
    const interval = setInterval(() => {
      const iframe = document.querySelector('.intercom-launcher-frame')

      if (iframe) {
        const intercomLauncher = iframe.contentDocument.querySelector('#intercom-container .intercom-launcher')
        intercomLauncher.setAttribute("style", "background: #14C393 !important;")
        iframe.setAttribute('style', 'background: #14C393;')

        clearInterval(interval)
        clearTimeout(timeout)
      }
    }, 100)
  }
}

const Intercom = ({ children }) => {
  updateIntercom()
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser } = {}, loading }) => {
        if (!loading) {
          const { email, username, id } = currentUser || {}
          const settings = {
            app_id: 'cyjjko9u',
            user_id: id,
            name: username,
            email
          }
          window.Intercom('boot', settings)
          window.intercomSettings = settings
        }

        return children
      }}
    </Query>
  )
}

export default Intercom
