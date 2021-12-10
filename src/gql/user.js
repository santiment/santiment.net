import gql from 'graphql-tag'

const userDataFragment = gql`
  fragment userDataFragment on User {
    id
    email
    avatarUrl
    username
    privacyPolicyAccepted
    apikeys
    subscriptions {
      id
      cancelAtPeriodEnd
      currentPeriodEnd
      plan {
        id
        name
        amount
        interval
        product {
          id
          name
        }
      }
    }
  }
`

export const USER_PAYMENTS = gql`
  query {
    payments {
      amount
      createdAt
      description
      receiptUrl
      status
    }
  }
`

export const CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      ...userDataFragment
    }
  }
  ${userDataFragment}
`

export const EMAIL_LOGIN_MUTATION = gql`
  mutation($email: String!, $subscribeToWeeklyNewsletter: Boolean = false) {
    emailLogin(
      email: $email
      subscribeToWeeklyNewsletter: $subscribeToWeeklyNewsletter
    ) {
      success
    }
  }
`
