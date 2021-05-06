import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AmplifySignOut } from '@aws-amplify/ui-react';


function Navigation(props) {
  return (
    <div className="navigation fixed-top">

      <header id='main-header'>
        <div className='container'>
          <img src="https://cdn.discordapp.com/attachments/809157200622387225/838663802555465728/circle-cropped.png" alt="logo"/>
          <h1>Geosemantics</h1>
            
          <div id='signout'>
            <AmplifySignOut/>
          </div>
          
        </div>
      </header>      

      <div class="clr"></div>

      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div>
            <ul className="navbar-nav">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  HOME
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/geoscience" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/geoscience">
                  GEOSCIENCE
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/services">
                  SERVICES
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