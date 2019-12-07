const axios = require('axios').default;
const defaultHeaders = { 'content-type': 'application/x-www-form-urlencoded' };
const apiUrl = 'http://localhost:8000/'

export class ApiRequest {
    post(endpoint, dataFromRemote) {
        axios({
            method: 'post',
            url: `${apiUrl}${endpoint}`,
            headers: defaultHeaders,
            data: dataFromRemote
        });
    }
}