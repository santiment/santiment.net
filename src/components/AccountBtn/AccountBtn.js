import React from 'react'
import cx from 'classnames'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../../gql/user'
import styles from './AccountBtn.module.scss'

const AccountBtn = ({ classes = {} }) => {
  return (
    <div
      className={cx(styles.wrapper, classes.wrapper)}
      onClick={() => window.gtag('event', 'sign_up')}
    >
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { currentUser } = {} }) => {
          const isLoggedIn = !!currentUser

          return (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={
                isLoggedIn
                  ? 'https://app.santiment.net/'
                  : 'https://app.santiment.net/sign-up'
              }
              className={cx(
                styles.button,
                'btn-1 row hv-center',
                isLoggedIn && cx('btn-2', styles.button__loggedIn),
                classes.btn
              )}
            >
              {isLoggedIn ? 'Go to Sanbase' : 'Get Started'}
            </a>
          )
        }}
      </Query>
    </div>
  )
}

export default AccountBtn
