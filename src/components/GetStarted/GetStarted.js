import React from "react"

import { Mutation } from 'react-apollo'
import { tr } from '../../utils/translate'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm'
import styles from "./GetStarted.module.scss"

const GetStarted = () => (
	<div className={styles.wrapper}>
		<h4 className={styles.title}>Ready to get started? Sign up now!</h4>
		<NotificationsContext.Consumer>
      {({ add }) => (
        <Mutation mutation={EMAIL_LOGIN_MUTATION}>
          {(sendConfirmationEmail, { loading }) => (
            <SubscriptionForm loading={loading} send={sendConfirmationEmail} add={add} classes={styles} />
          )}
        </Mutation>
      )}
    </NotificationsContext.Consumer>
	</div>
)

export default GetStarted
