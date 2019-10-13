import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// CSS
import "./sass/index.scss";

// Moment
import Moment from "react-moment";

// Components
import RegisterForm from "./components/Register/RegisterForm";
import LoginForm from "./components/Login/LoginForm";
import UserHomepage from "./components/UserHomepage";

Moment.startPooledTimer(30000);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />

        <Route path="/home" component={UserHomepage} />
      </Switch>
    </Router>
  );
}

export default App;
