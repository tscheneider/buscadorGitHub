import React from "react";
import propTypes from "prop-types";
import RepoItem from "./RepoItem";

/* Mapeia todos o item so repositorio atraves do repo e key  */
const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />); // repo e repo id definifos em RepoItem
};

/* Define o tipo do componente */
Repos.propTypes = {
  repo: propTypes.array.isRequired /* array */,
};
export default Repos;
