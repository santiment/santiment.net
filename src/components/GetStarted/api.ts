import { ApiMutation } from 'san-webkit-next/api'

export const mutateEmailLoginNewsletter = ApiMutation(
  ({ email }: { email: string }) => ({
    schema: `
      mutation($email: String!) {
        emailLogin(email: $email, subscribeToWeeklyNewsletter: true) {
          success
        }
      }
    `,
    variables: { email },
  }),
  (gql: { emailLogin: { success: boolean } }) => gql.emailLogin.success,
)
