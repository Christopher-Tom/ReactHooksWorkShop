import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StateExercise from "./exercise/01";
import EffectExercise from "./exercise/02";

export default function TableOfContents() {
  return (
    <div>
      <Router>
        <div>
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
