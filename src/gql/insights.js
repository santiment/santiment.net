import gql from 'graphql-tag'

export const INSIGHTS_QUERY = gql`
  query {
    insights: allInsights(pageSize: 5) {
      id
      title
    }
  }
`

export const INSIGHTS_BY_SEARCH_TERM_QUERY = gql`
  query allInsightsBySearchTerm($searchTerm: String!) {
    insights: allInsightsBySearchTerm(searchTerm: $searchTerm) {
      id
      title
    }
  }
`
