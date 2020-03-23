import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import User from "./components/User/User";
import "./App.css";

const App = () => {
  const [showLoader, handleShowLoader] = useState(true);
  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      // remove the loader after displaying it for 3000ms
      handleShowLoader(false);
    }, 3000);
    return () => clearTimeout(timeoutHandler);
  }, []);

  return (
    <div className="App">
      <div className="container">{showLoader ? <Loader /> : <User />}</div>
    </div>
  );
};

export default App;
