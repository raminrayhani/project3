import React from "react";
import { Link } from "react-router";

const Nav = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Buy Stuff</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/likes" && "active"}>
          <Link to="/likes">Likes</Link>
        </li>
        <li className={location.pathname === "/dislikes" && "active"}>
          <Link to="/dislikes">Dislikes</Link>
        </li>
        <li className={location.pathname === "/deals" && "active"}>
          <Link to="/deals">Great Deals</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
