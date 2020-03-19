import React, { useState, useEffect } from "react";
import './App.css';
import Profile from "./component/Profile";


const BAckendURL = "https://reqres.in/api/users?page=2";

export default function App() {
const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BAckendURL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="App">

 {data.map(user => (user.id !== "undefined" && (
          <Profile
            name={user.name}
            last_name={user.last_name}
            profilePic={user.profile_pic}
          />
        )))
}
    </div>
  );
}

