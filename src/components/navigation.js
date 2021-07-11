import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
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
    </div>
  );
}
