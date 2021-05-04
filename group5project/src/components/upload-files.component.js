import { selectInput } from "@aws-amplify/ui";
import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

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

  upload() {
              
              console.log("uploading the file");
              let currentFile = this.state.selectedFiles[0];
        
              this.setState({
                message: "",
                progress: 0,
                currentFile: currentFile
              });
              
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
             
                  //if(response.data.result!=null) this.removeSlashes(response.data.result)
                  return response.data;
                })
                .then((files) => {
                  this.setState({
                    fileInfos: files.data,
                  });
                })
                .catch((ex) => {
                  console.log(ex.message);
                  this.setState({
                    progress: 0,
                    message: "There was an issue!",
                    currentFile: undefined,
                  });
                });
                // eslint-disable-next-line no-restricted-globals
  }


  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      status,
      result,
      createdURL
    } = this.state;

    return (
      <div>
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
          <div className="card-header"><a class="button" href={createdURL}><button className="btn btn-info"
          disabled={!result}>Download</button></a></div>
         </div>
        </div>

        <div className="alert alert-light" role="alert">
        <div dangerouslySetInnerHTML={{__html:result}}></div>
        </div>
        
      </div>
    );
  }
}

