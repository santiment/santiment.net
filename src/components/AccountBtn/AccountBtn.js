import React from 'react'
import cx from 'classnames'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../../gql/user'
import styles from './AccountBtn.module.scss'

const AccountBtn = ({ intl, isAccountPage }) => {
  return (
    <div className={styles.account}>
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { currentUser } = {} }) => {
          const isLoggedIn = Boolean(currentUser)
          return isLoggedIn ? (
            <div>Logged</div>
          ) : (
            <>
              <Button
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href='https://app.santiment.net/login'
                variant='flat'
                border
                className={styles.login}
              >
                Log in
              </Button>
              <Button
                as='a'
                target='_blank'
                rel='noopener noreferrer'
                href='https://app.santiment.net/sign-up'
                variant='fill'
                accent='positive'
                className={styles.create}
              >
                Create account
              </Button>
            </>
          )
        }}
      </Query>
    </div>
  )
}

export default injectIntl(AccountBtn)
