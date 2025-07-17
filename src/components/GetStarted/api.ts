import { ApiMutation } from 'san-webkit-next/api'

export const mutateEmailLoginNewsletter = ApiMutation(
  (email: string) => `
    mutation {
      emailLogin(email: "${email}", subscribeToWeeklyNewsletter: true) {
        success
      }
    }
  `,
  (gql: { emailLogin: { success: boolean } }) => gql.emailLogin.success,
)
