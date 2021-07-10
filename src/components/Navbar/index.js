import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const onClick = (props) => {
  // let collapsed = props.target.parentElement.parentElement.ariaExpanded;
  console.log(props.target.parentElement[2]);

  // if(collapsed) {
  //   onClick();
  // }
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="brand-logo" to="/">
          Ashley<span className="emphasis">Wright</span> |
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i className="fas fa-bars fa-1x"></i></span></button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent1">
          <ul className="navbar-nav mr-auto" onClick={onClick}>
            <li className="nav-item">
              <Link
                to="/home"
                className={
                  window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                >
                Home
              </Link>
            </li>
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
      </div>
    </nav>
  );
}

export default Navbar;
