import React from "react";
import { Mutation } from "react-apollo";
import { EMAIL_LOGIN_MUTATION } from "../../gql/user";
import { NotificationsContext } from "../Notifications/Notifications";
import SubscriptionForm from "../SubscriptionForm/SubscriptionForm";
import styles from "./GetStarted.module.scss";

const GetStarted = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h4 className={styles.title}>Ready to get started? Sign up now!</h4>
      <NotificationsContext.Consumer>
        {({ add }) => (
          <Mutation mutation={EMAIL_LOGIN_MUTATION}>
            {(sendConfirmationEmail, { loading }) => (
              <SubscriptionForm
                loading={loading}
                send={sendConfirmationEmail}
                add={add}
                classes={styles}
                showCheckbox
              />
            )}
          </Mutation>
        )}
      </NotificationsContext.Consumer>
    </div>
  </div>
);

export default GetStarted;
