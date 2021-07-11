import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StateExercise from "./exercise/01";
import EffectExercise from "./exercise/02";

export default function TableOfContents() {
  return (
    <div>
      Choose an exercise
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/use-state">Use State</Link>
            </li>
            <li>
              <Link to="/use-effect">Use Effect</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <EffectExercise />
            </Route>
            <Route path="/use-state">
              <StateExercise />
            </Route>
            <Route path="/use-effect">
              <EffectExercise />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
