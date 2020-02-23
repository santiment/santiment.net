import React from 'react'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import { Mutation } from 'react-apollo'
import { tr } from '../../utils/translate'
import Subheading from '../Heading/Subheading'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import styles from './WelcomeBlock.module.scss'

const WelcomeBlock = () => (
  <section className={styles.wrapper}>
    <Subheading className={styles.title}>
      We provide tools to help you analyze crypto markets and find data-driven
      opportunities to optimize your investing.
    </Subheading>
    <div className={styles.description}>
      Santiment is a behavior analytics platform for cryptocurrencies, sourcing
      on-chain, social and development information on 900+ coins.
    </div>
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
  </section>
)

export default WelcomeBlock