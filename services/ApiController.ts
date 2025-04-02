import axios, { Method, AxiosRequestHeaders } from 'axios';
import { ApiRequest } from '../validations/ApiRequest';

export class ApiController {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async sendRequest(apiRequest: ApiRequest) {
    try {
      const response = await axios({
        url: `${this.baseUrl}${apiRequest.endpoint}`,
        method: apiRequest.method;
        headers: apiRequest.headers,
        data: apiRequest.payload,
      });
      return response.data;
    } catch (error: any) {
      console.log(apiRequest, error);
      throw error;
    }
  }

}