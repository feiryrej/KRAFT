import { ApiService } from "./apiService.js";

export class IndexService extends ApiService {
    constructor() {
        super();
    }

    async getIndex() {
        try {
            const response = await  this.request('GET', '/', null)
            const { statusText, status, data } = response;
            return { statusText, status, data }
        } catch (error) {
            return Promise.reject(error)
        }
    }
}