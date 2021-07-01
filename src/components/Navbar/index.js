import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Ashley Wright
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/aboutme"
              className={
                window.location.pathname === "/aboutme" ? "nav-link active" : "nav-link"}
              >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/work"
              className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
            >
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacts"
              className={window.location.pathname === "/contacts" ? "nav-link active" : "nav-link"}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
