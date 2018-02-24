import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
    <div className="navbar-header">
      <Link to="/">React test </Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  </div>
</nav>
  )
};
