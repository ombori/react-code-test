import React from "react";

import "./UserListItem.css";

const getUserFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const UserListItem = ({ avatar, first_name, last_name }) => (
  <li className="users-list__item">
    <img className="users-list__item__img" src={avatar} />
    <strong>{getUserFullName(first_name, last_name)}</strong>
  </li>
);

export default UserListItem;
