import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

export default class UploadFiles extends Component {

  
  constructor(props) {

    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    this.state = {
      count: 0,
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
              let m5 = ["Spinning the hamster…","Don't worry - a few bits tried to escape, but we caught them",
              "It's still faster than you could draw it","Wait, do you smell something burning?","I swear it's almost done.","Time flies when you’re having fun."];
              console.log("uploading the file");
              let currentFile = this.state.selectedFiles[0];

              this.setState({
                message: "",
                progress: 0,
                currentFile: currentFile,
                result: "",
                status: ""
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
                  if(response.data.result===undefined) {
                    if(this.state.count<=5){
                    this.setState({
                      status: m5[this.state.count],
                      count: this.state.count + 1
                    });
                  }
                    this.upload();
                  } 
                  return response.data;
                })
               .catch((ex) => {
                  console.log(ex.message);
                  this.setState({
                    progress: 0,
                    message: "There was an issue!",
                    currentFile: undefined,
                    count: 0
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
      <body>
        <div className="about-services">
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

            <input type="file" onChange={this.selectFile} id="upload" hidden />
            <label for="upload">Browse</label> 
            
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
        </div>
      </body>
    );
  }
}