import React, { useState } from 'react';
import Amplify, { Storage } from 'aws-amplify';

function Services() {
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
  <div className="services">
    <body>
      <nav id='navbar'>
        <div className='container'>
        </div>
      </nav>

      <div className='container'>
        <div className='box-1'>
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

export default Services;