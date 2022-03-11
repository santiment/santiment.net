import React from "react";
import { Query } from "react-apollo";
import TrendingWords from "./TrendingWords";
import { TRENDING_WORDS_QUERY } from "../../../../gql/trendingWords";

const TrendingWordsCategory = ({ searchTerm, ...props }) => (
  <Query query={TRENDING_WORDS_QUERY}>
    {({ data: { getTrendingWords = [] } = {} }) => (
      <TrendingWords
        getTrendingWords={getTrendingWords}
        searchTerm={searchTerm}
        {...props}
      />
    )}
  </Query>
);

export default TrendingWordsCategory;
