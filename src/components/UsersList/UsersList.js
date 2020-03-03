import React from "react";
import { compose } from "lodash/fp";

import withLoading from "../withLoading";
import withDataLoader from "../withDataLoader";
import UserListItem from "./UserListItem/UserListItem";

import "./UsersList.css";

const UsersList = ({ data }) => {
  return (
    <>
      <header className="app__header">Users</header>
      {data.length && (
        <ul className="users-list">
          {data.map(user => (
            <UserListItem key={user.id} {...user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default compose(withDataLoader, withLoading)(UsersList);
