import API from './api';
import { AxiosResponse } from 'axios';

export enum ResultCodeCaptcha {
  Captcha = 10
}

interface GetCaptchaResponse {
  url: string;
}

class SecurityAPI extends API {
  constructor () {
    super();
  }

  getCaptcha (): Promise<AxiosResponse<GetCaptchaResponse>> {
    return this._instance.get(`/security/get-captcha-url`);
  }
}

export default new SecurityAPI();
