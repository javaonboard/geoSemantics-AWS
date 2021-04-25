import React, { useState } from 'react';
import './App.css';
// Import Amplify and Storage
// withAuthenticator is a higher order component that wraps the application with a login page
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
// Import the project config files and configure them with Amplify
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
    //get the file  from browser
    const [file, setFile]=useState();
    // check the status on the file uploaded
    const[uploaded,setUploaded]=useState(false);
    
  
    
  
    async function getfile(e){
      setFile(e.target.files[0]);
    }
  
    async function Downloaded()
    {
      
      const downloadURL= await Storage.get(file.name);
      window.location.href = downloadURL;
    }
  
    async function UploadFile() {    
      try {
        
       const storeResult= await Storage.put(file.name, file, {
          contentType: 'application.pdf' // contentType is optional
        });
        setUploaded(true)
        console.log(storeResult);
  
      } catch (error) {
        console.log('Error uploading file: ', error);
      }  
    }

  return (
    <div>
      <head>
        <title>Find Key Geoscience Terms</title>
      </head>  

      <body>
          <header id='main-header'>
            <div class='container'>
              <h1>Find Key Geoscience Terms</h1>
              <div id='signout'>
                <AmplifySignOut/>
              </div>
            </div>
          </header>

          <nav id='navbar'>
            <div class='container'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
              </ul>
            </div>
          </nav>

          <div class='container'>
            <div class='box-1'>
              <label>Upload a PDF: </label>
              <input
                type='file'
                onChange={(evt) => getfile(evt)}
              />
              <button onClick={async () => {UploadFile()
                }}>Upload The File To S3</button>
             {uploaded
                ? <div>Your file is uploaded!</div>
                : <div>Upload a PDF to get started</div>}
              <br/>
              
              <label>Download the results: </label>
              <div>
              <button onClick={() => Downloaded()}>Click Here To Download</button>
        
              </div> 
            </div>
          </div>
          <br/>
          <br/>
      </body>

    </div>
  );
}

// withAuthenticator wraps your App with a Login component
export default withAuthenticator(App);