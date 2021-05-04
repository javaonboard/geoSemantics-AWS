import http from "../http-common.js";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/Geo-Semantic-invoke-endpoint", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "x-api-key": "tPn8h8nmzi1vYEdPVKAyn5DGLXiHOdKq4uKuqGrX",
        "InvocationType": "Event",
        "Access-Control-Allow-Origin": "*" 
      },
      onUploadProgress,
    });
  }

}

export default new UploadFilesService();
