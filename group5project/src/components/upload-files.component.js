import { selectInput } from "@aws-amplify/ui";
import React, { Component } from "react";
import UploadService from "../services/upload-files.service";
import {Data} from './Data'
import { Auth } from 'aws-amplify';

export default class UploadFiles extends Component {

  
  constructor(props) {

    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    
    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      status: "",
      fileName: "",
      result: "",
      fileInfos: [],
      createdURL:""
    };
  }


  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
      
    });
  }


  getUser() {
    let user = Auth.user.username;
    return user;
    }

  upload() {
              console.log("uploading the file");
              let currentFile = this.state.selectedFiles[0];
              console.log("file name "+ this.state.selectedFiles[2]);
              this.setState({
                message: "",
                progress: 0,
                currentFile: currentFile
              });
              
                console.log( "username is: ", this.getUser() );
                // eslint-disable-next-line no-restricted-globals
                UploadService.upload(currentFile, (event) => {
                  this.setState({
                    progress: Math.round((100 * event.loaded) / event.total),
                  });
              })
                .then((response) => {
                  this.setState({
                    message: response.data.message,
                    status: response.data.status,
                    result: response.data.result,
                    createdURL: response.data.url
                  });
                  console.log("download "+ response.data.url);
                  console.log("createdUrl "+ this.state.createdURL);
  
                  if(response.data.result!=null) this.removeSlashes(response.data.result)
                  return response.data;
                })
                .then((files) => {
                  this.setState({
                    fileInfos: files.data,
                  });
                })
                .catch(() => {
                  this.setState({
                    progress: 0,
                    message: "Could not upload the file!",
                    currentFile: undefined,
                  });
                });
                // eslint-disable-next-line no-restricted-globals

  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  removeSlashes(str){
    for(let i=0; i<str.length; i++){
      if(str[i]==="/")str[i] = "";
    }
    this.setState({
      result : str
    });
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
      status,
      description,
      resultPage,
      result,
      fileName,
      createdURL
    } = this.state;

    return (
      <div className="services">
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button
          className="btn btn-success"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        <div className="card">
          <div className="card-header">Status: {status}</div> 
          <div className="card">
          <a class="button" href={createdURL}>Download</a>
         </div>
        </div>

        <div className="alert alert-light" role="alert">
        <div dangerouslySetInnerHTML={{__html:result}}></div>
        </div>
        
      </div>
    );
  }
}

