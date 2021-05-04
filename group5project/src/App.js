import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Services, Footer } from "./components";
import './components/App.css';
// Import Amplify and Storage
// withAuthenticator is a higher order component that wraps the application with a login page
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
// Import the project config files and configure them with Amplify
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./components/upload-files.component.js";
import { Data } from './components'

Amplify.configure(awsconfig);

function App() {
  return (
    <div>

      <Router>
        <Navigation />
         <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/services" exact component={() => <UploadFiles />} />  
         </Switch>
         <Footer />
      </Router>

    </div>
  );
}

// withAuthenticator wraps your App with a Login component
export default withAuthenticator(App);