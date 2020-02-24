import React from "react"
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import { Mutation } from 'react-apollo'
import { tr } from '../../utils/translate'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import styles from "./GetStarted.module.scss"

const GetStarted = () => (
	<div className={styles.wrapper}>
		<h4 className={styles.title}>Ready to get started? Sign up now!</h4>
		<NotificationsContext.Consumer>
      {({ add: addNot }) => (
        <Mutation mutation={EMAIL_LOGIN_MUTATION}>
          {(sendConfirmationEmail, { loading }) => (
            <form
              className={styles.form}
              onSubmit={e => {
                e.preventDefault()
                sendConfirmationEmail({
                  variables: {
                    email: e.currentTarget.email.value
                  }
                }).then(() => {
                  addNot({
                    type: 'success',
                    title: 'Verification email was sent to the provided email!'
                  })
                })
              }}
            >
              <Input
                className={styles.input}
                type='email'
                required
                placeholder={'Enter your email'}
                name='email'
              />
              <Button
                className={styles.btn}
                variant='fill'
                accent='positive'
                isLoading={loading}
              >
                {tr('start.btn', 'Get started')}
              </Button>
            </form>
          )}
        </Mutation>
      )}
    </NotificationsContext.Consumer>
	</div>
)

export default GetStarted
