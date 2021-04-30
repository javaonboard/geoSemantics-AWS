import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Services, History } from "./components";
import './App.css';
// Import Amplify and Storage
// withAuthenticator is a higher order component that wraps the application with a login page
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
// Import the project config files and configure them with Amplify
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <header id='main-header'>
          <div className='container'>
            <h1>Find Key Geoscience Terms</h1>
            <div id='signout'>
              <AmplifySignOut/>
            </div>
          </div>
      </header>
      
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/services" exact component={() => <Services />} />
          <Route path="/history" exact component={() => <History />} />
        </Switch>
      </Router>  
    </div>
  );
}

// withAuthenticator wraps your App with a Login component
export default withAuthenticator(App);