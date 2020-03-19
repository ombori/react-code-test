import React from "react";

const Profile = ( {name, last_name, profilePic} ) => (
    
 <div className="view__users">
   <li className="users-list__li">
        <img className="users-list__img" src={profilePic} alt={`${name}'s profile pic`} />
        <h2 className="users-list__h2">
          {name} <br />
          {last_name}
        </h2>
      </li>
  </div>
);

export default Profile;
