import React from 'react'
import { Query } from 'react-apollo'
import Insights from './Insights'
import {
  INSIGHTS_BY_SEARCH_TERM_QUERY,
  INSIGHTS_QUERY
} from '../../../../../gql/insights'

const InsightsCategory = ({ searchTerm, ...props }) => {
  return (
    <Query query={searchTerm ? INSIGHTS_BY_SEARCH_TERM_QUERY : INSIGHTS_QUERY}>
      {({ client }) => {
        return <Insights client={client} searchTerm={searchTerm} {...props} />
      }}
    </Query>
  )
}

export default InsightsCategory
