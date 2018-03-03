import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            React boilerplate
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
