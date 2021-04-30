import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/history" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/history">
                  History
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);