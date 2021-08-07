import axios from 'axios';
import { API_SAMURAI_SETTINGS } from '../utils/constants';

class API {
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
