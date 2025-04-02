import axios, { Method, AxiosRequestHeaders } from 'axios';

export class ApiController {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async sendRequest(endpoint: string, method: Method, headers?: AxiosRequestHeaders, payload?: any) {
    try {
      const response = await axios({
        url: `${this.baseUrl}${endpoint}`,
        method,
        headers,
        data: payload,
      });
      return response.data;
    } catch (error: any) {
      console.error(`Aconteceu um erro ao realizar a request: ${error.message}, ${this.baseUrl}, ${endpoint}, ${method}, ${payload}`);
      throw error;
    }
  }

}