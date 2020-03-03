import React from "react";
import { compose } from "lodash/fp";

import withLoading from "../withLoading";
import withDataLoader from "../withDataLoader";

import "./UsersList.css";

const UsersList = ({ data }) => {
  return (
    <>
      <header className="app__header">Users</header>
      <ul>
        {data.length &&
          data.map(({ id, first_name, last_name }) => (
            <li key={id}>{`${first_name} ${last_name}`}</li>
          ))}
      </ul>
    </>
  );
};

export default compose(withDataLoader, withLoading)(UsersList);
