import axios, { AxiosRequestConfig } from 'axios';

class ApiOperations {
    async getRequest(url: string, headers?: AxiosRequestConfig<any>) {
        const header = headers ? headers : { headers: { accept: 'application/json' } };
        const response = await axios.get(url, header);
        return response;
    }

    async postRequest(url: string, data: any, headers?: AxiosRequestConfig<any>) {
        const header = headers ? headers : { headers: { 'Content-Type': 'application/json' } };
        const response = await axios.post(url, data, header);
        return response;
    }

    async patchRequest(url: string, data: any, headers?: AxiosRequestConfig<any>) {
        const header = headers ? headers : { headers: { 'Content-Type': 'application/json' } };
        const response = await axios.patch(url, data, header);
        return response;
    }

    async deleteRequest(url: string, headers?: AxiosRequestConfig<any>) {
        const header = headers ? headers : { headers: { accept: 'application/json' } };
        const response = await axios.delete(url, header);
        return response;
    }
}

export const apiOperations = new ApiOperations();
