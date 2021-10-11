import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FormSearch } from "./components/FormSearch";
import { Home } from "./components/Home";
import { Dictionary } from "./components/Dictionary";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <h1 className="text-center color-secondary mt-3 mb-4">
              <Link
                to="/"
                className="page-title text-decoration-none text-secondary"
              >
                English Dictionary
              </Link>
            </h1>
            <FormSearch />
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:hash">
          <Dictionary />
        </Route>
      </Switch>
    </Router>
  );
}
