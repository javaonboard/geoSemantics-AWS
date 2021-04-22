import React, { useState } from 'react';
import './App.css';
// Import Amplify and Storage
import Amplify, { Storage } from 'aws-amplify';
// withAuthenticator is a higher order component that wraps the application with a login page
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
// Import the project config files and configure them with Amplify
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  //const downloadUrl = async () => {
   // Creates download url that expires in 5 minutes/ 300 seconds
   // const downloadUrl = await Storage.get('picture.jpg', { expires: 300 });
   // window.location.href = downloadUrl
  //}
  const handleChange = async (e) => 
  {
    const file = e.target.files[0];
    const fileUploadname=e.target.files[0].name;
 
    try {
      setLoading(true);
      // Upload the file to s3 with public access level. 


      await Storage.put(fileUploadname,file, {
        contentType: 'application/pdf'
      });
      // Retrieve the uploaded file to display
      const url = await Storage.get('Wolfcamp.pdf', { level: 'public' })
      setImageUrl(url);
      setLoading(false);
    } 
    catch (err) {
      console.log(err);
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
              {loading ? <h3>Uploading...</h3> : <input
                type='file' accept='image/jpg'
                onChange={(evt) => handleChange(evt)}
              />}
            
              {imageUrl ? <img style={{ width: '30rem' }} src={'https://i.imgur.com/xezlE2x'} alt='File not found'/> : <span />}

              <br/>
              
              <label>Download the results: </label>
              <select name='results' id=''>
                        <option value='placeholder_report_1'>placeholder_report_1</option>
                        <option value='placeholder_report_2'>placeholder_report_2</option>
                        <option value='placeholder_report_3'>placeholder_report_3</option>
              </select>
              <button>Download Report</button>  
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