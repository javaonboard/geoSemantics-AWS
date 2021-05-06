import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navigation, Services } from "/";

function Home() {
  return (
    <div>
      <body>
        <section id="showcase">
          <div className="container">
            <h1>Find Key Geoscience Terms</h1>
            <div className="button">
              <Link to="/services">Evaluate Your Document</Link>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;