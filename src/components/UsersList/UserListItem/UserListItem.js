import React from "react";

import "./UserListItem.css";

const getUserFullName = (firstName, lastName) => `${firstName} ${lastName}`;
const UserListItem = ({ avatar, first_name, last_name }) => {
  const userFullName = getUserFullName(first_name, last_name);

  return (
    <li className="users-list__item">
      <img alt={userFullName} className="users-list__item__img" src={avatar} />
      <strong>{userFullName}</strong>
    </li>
  );
};

export default UserListItem;
