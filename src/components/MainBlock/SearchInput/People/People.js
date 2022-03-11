import React, { useMemo } from "react";
import Category from "../Category";
import styles from "../Category.module.scss";

const propsAccessor = ({ id }) => ({
  key: id,
  to: "https://app.santiment.net/profile/" + id
});

function peoplePredicate(value) {
  const searchTerm = value.toLowerCase();
  return ({ username }) => username.toLowerCase().includes(searchTerm);
}

const Person = ({ avatarUrl, username }) => (
  <>
    {avatarUrl ? (
      <img className={styles.avatar} src={avatarUrl} alt="Avatar" />
    ) : (
      <div className={styles.fallback}>{username[0]}</div>
    )}
    <span className={styles.username}>{username}</span>
  </>
);

const People = ({ data, searchTerm, ...props }) => {
  const people = data ? data.popularInsightAuthors : [];
  const suggestions = useMemo(
    () =>
      people ? people.filter(peoplePredicate(searchTerm)).slice(0, 5) : [],
    [searchTerm, people]
  );

  return suggestions.length ? (
    <Category
      {...props}
      className={styles.category_people}
      title="People"
      items={suggestions}
      Item={Person}
      propsAccessor={propsAccessor}
    />
  ) : null;
};

export default People;
