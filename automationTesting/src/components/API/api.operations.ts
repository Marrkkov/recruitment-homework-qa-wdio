import axios, { AxiosRequestConfig } from 'axios';

class ApiOperations {

    async getRequest(url: string, headers?: AxiosRequestConfig<any>) {
        const header = headers ? headers : { headers : { accept: 'application/json'}};
        const response = await axios.get(url, header);
        return response;
    }


}

export const apiOperations = new ApiOperations();