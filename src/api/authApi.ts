import API, { ApiResponse, ResultCode } from './api';
import { ResultCodeCaptcha } from './securityAPI';
import { LoginPropsType } from '../types';
import { AxiosResponse } from 'axios';

export interface LoginResponse {
  resultCode: ResultCode | ResultCodeCaptcha;
  data: {
    userId: string;
  };
  messages: string[];
}

export interface AuthResponse extends ApiResponse {
  data: {
    id: string;
    email: string;
    login: string;
  };
}

class AuthAPI extends API {
  constructor () {
    super();
  }

  login (data: LoginPropsType): Promise<AxiosResponse<LoginResponse>> {
    return this._instance.post('/auth/login', data);
  }

  logout (): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.delete('/auth/login');
  }

  auth (): Promise<AxiosResponse<AuthResponse>> {
    return this._instance.get(`/auth/me`);
  }
}

export default new AuthAPI();
