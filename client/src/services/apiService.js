import axios from "axios";

export class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "/api",
    });

    this.api.defaults.headers.post["Content-Type"] = "application/json";
  }

  request(method, url, data) {
    return this.api({
      method,
      url,
      data,
    }).catch((error) => {
      return Promise.reject(error);
    });
  }
}
