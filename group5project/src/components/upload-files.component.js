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
      fileInfos: []
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
              
                UploadService.upload(currentFile, (event) => {
                  this.setState({
                    progress: Math.round((100 * event.loaded) / event.total),
                  });
              })
                .then((response) => {
                  this.setState({
                    message: response.data.message,
                    status: response.data.status,
                    result: response.data.result
                  });

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

  }


  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      status,
      result
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
        
        <div ontouchstart="">
          <div className="button"
            disabled={!selectedFiles}
            onClick={this.upload}
          >
            <a href="#">Analyze</a>
          </div>
        </div>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        <div className="card">
          <div className="card-header">Status: {status}</div> 

        </div>

        <div className="alert alert-light" role="alert">
        <div dangerouslySetInnerHTML={{__html:result}}></div>
        </div>
        
      </div>
    );
  }
}