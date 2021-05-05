import http from "../http-common.js";

class UploadFilesService {

  upload(file, onUploadProgress) {
    let formData = new FormData();
    let response = undefined;
    formData.append("file", file);

    response = http.post("/Geo-Semantic-invoke-endpoint", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "x-api-key": "tPn8h8nmzi1vYEdPVKAyn5DGLXiHOdKq4uKuqGrX",
        "InvocationType": "Event"
      },
      onUploadProgress,
    });
    
  
    
    return response;
  }

}

export default new UploadFilesService();
