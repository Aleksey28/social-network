import API, { ApiResponse, ResultCode } from './api';
import { ResultCodeCaptcha } from './securityAPI';
import { LoginPropsType } from '../types';
import { AxiosResponse } from 'axios';

interface LoginResponseData {
  userId: string;
}

interface AuthResponseData {
  id: string;
  email: string;
  login: string;
}

class AuthAPI extends API {
  login (data: LoginPropsType): Promise<AxiosResponse<ApiResponse<LoginResponseData, ResultCode | ResultCodeCaptcha>>> {
    return this._instance.post('/auth/login', data);
  }

  logout (): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.delete('/auth/login');
  }

  auth (): Promise<AxiosResponse<ApiResponse<AuthResponseData>>> {
    return this._instance.get(`/auth/me`);
  }
}

export default new AuthAPI();
