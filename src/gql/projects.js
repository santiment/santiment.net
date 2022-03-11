import gql from 'graphql-tag'

export const projectBaseData = gql`
  fragment projectBaseData on Project {
    id
    name
    slug
    ticker
    logoUrl
    darkLogoUrl
    marketcapUsd
  }
`

export const PROJECTS_QUERY = gql`
  query {
    projects: allProjects(minVolume: 0) {
      ...projectBaseData
    }
  }
  ${projectBaseData}
`
