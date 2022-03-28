import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Admin from "./views/Admin";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Sign from "./views/sign";
export default function App() {
  return (
    <Router>
      <nav>
        <button>
          <Link to="/admin">Admin</Link>
        </button>

        <button>
          <Link to="/signup">Sign up</Link>
        </button>

        <button>
          <Link to="/login">Login</Link>
        </button>

        <button>
          <Link to="/sign">Sign</Link>
        </button>
      </nav>
      <Switch>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/sign">
          <Sign />
        </Route>
      </Switch>
    </Router>
  );
}
