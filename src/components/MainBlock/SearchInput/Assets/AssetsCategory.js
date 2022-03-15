import React from 'react'
import { Query } from 'react-apollo'
import Assets from './Assets'
import { PROJECTS_QUERY } from '../../../../gql/projects'

const AssetsCategory = ({ searchTerm, ...props }) => (
  <Query query={PROJECTS_QUERY}>
    {({ data, loading }) => (
      <Assets
        data={data}
        loading={loading}
        searchTerm={searchTerm}
        {...props}
      />
    )}
  </Query>
)

export default AssetsCategory
