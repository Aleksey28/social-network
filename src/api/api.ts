import axios, { AxiosInstance } from 'axios';
import { API_SAMURAI_SETTINGS } from '../utils/constants';

export interface ApiResponse {
  resultCode: number;
  messages: string[];
  data: {};
}

class API {
  protected _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create( {
      baseURL: API_SAMURAI_SETTINGS.baseUrl,
      withCredentials: true,
      headers: {
        'API-KEY': API_SAMURAI_SETTINGS.token,
      },
    } );
  }
}

export default API;
