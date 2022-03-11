import gql from 'graphql-tag'

export const POPULAR_AUTHORS_QUERY = gql`
  query {
    popularInsightAuthors {
      id
      username
      avatarUrl
    }
  }
`
