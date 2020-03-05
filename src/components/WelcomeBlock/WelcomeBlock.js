import React from 'react'
import { Mutation } from 'react-apollo'
import Subheading from '../Heading/Subheading'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm'
import styles from './WelcomeBlock.module.scss'

const WelcomeBlock = () => (
  <section className={styles.wrapper}>
    <Subheading className={styles.title}>
      Tools to help you analyze the crypto market and find data-driven investing
      opportunities
    </Subheading>
    <div className={styles.description}>
      Santiment is a behavior analytics platform for cryptocurrencies, sourcing
      on-chain, social and development information on 900+ coins.
    </div>
    <NotificationsContext.Consumer>
      {({ add }) => (
        <Mutation mutation={EMAIL_LOGIN_MUTATION}>
          {(sendConfirmationEmail, { loading }) => (
            <SubscriptionForm loading={loading} send={sendConfirmationEmail} add={add} classes={styles} />
          )}
        </Mutation>
      )}
    </NotificationsContext.Consumer>
  </section>
)

export default WelcomeBlock
