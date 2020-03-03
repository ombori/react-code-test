import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import routes from "../../config/routes";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
