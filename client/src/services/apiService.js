import axios from 'axios';

export class ApiService {
    constructor(baseURL ='/api') {
        this.baseURL = baseURL;
        this.api = axios.create({
            baseURL: this.baseURL
        });

        this.api.defaults.headers.post['Content-Type'] = 'application/json';
    }

    request(method, url, data) {
        return this.api({
            method,
            url,
            data
        });
    }
}