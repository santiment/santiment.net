import gql from 'graphql-tag'

export const TRENDING_WORDS_QUERY = gql`
  query {
    getTrendingWords(size: 20, from: "utc_now-1h", to: "utc_now") {
      topWords {
        word
      }
    }
  }
`
