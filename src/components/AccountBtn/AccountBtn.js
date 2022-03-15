import React from 'react'
import cx from 'classnames'
import { Query } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import { CURRENT_USER_QUERY } from '../../gql/user'
import styles from './AccountBtn.module.scss'

const AccountBtn = () => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => window.gtag('event', 'sign_up')}
    >
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { currentUser } = {} }) => {
          const isLoggedIn = !!currentUser

          return (
            <Button
              as='a'
              target='_blank'
              rel='noopener noreferrer'
              href={
                isLoggedIn
                  ? 'https://app.santiment.net/'
                  : 'https://app.santiment.net/sign-up'
              }
              variant={isLoggedIn ? 'flat' : 'fill'}
              border={isLoggedIn}
              accent={!isLoggedIn && 'positive'}
              className={cx(
                styles.button,
                isLoggedIn && styles.button__loggedIn
              )}
            >
              {isLoggedIn ? 'Back to Sanbase' : 'Get Started'}
            </Button>
          )
        }}
      </Query>
    </div>
  )
}

export default AccountBtn
