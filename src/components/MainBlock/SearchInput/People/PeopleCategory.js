import React from "react";
import { Query } from "react-apollo";
import People from "./People";
import { POPULAR_AUTHORS_QUERY } from "../../../../gql/profile";

const PeopleCategory = ({ searchTerm, ...props }) => (
  <Query query={POPULAR_AUTHORS_QUERY}>
    {({ data }) => {
      return <People data={data} searchTerm={searchTerm} {...props} />;
    }}
  </Query>
);

export default PeopleCategory;
