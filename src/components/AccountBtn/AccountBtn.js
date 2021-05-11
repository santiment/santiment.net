import React from 'react'
import cx from 'classnames'
import { Query } from 'react-apollo'
import { injectIntl } from 'gatsby-plugin-intl'
import Button from '@santiment-network/ui/Button'
import { CURRENT_USER_QUERY } from '../../gql/user'
import styles from './AccountBtn.module.scss'

const AccountBtn = ({ intl }) => {
  return (
    <div className={styles.account}>
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { currentUser } = {} }) => {
          const isLoggedIn = Boolean(currentUser)

          return (
              <Button
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href={isLoggedIn ? 'https://app.santiment.net/' : 'https://app.santiment.net/sign-up'}
                variant='flat'
                border
                className={styles.login}
              >
                  {isLoggedIn ? 'Back to Sanbase' : 'Create an account'}
              </Button>
          )
        }}
      </Query>
    </div>
  )
}

export default injectIntl(AccountBtn)
