import API, { ApiResponse, ResultCode } from './api';
import { LoginProps, PhotosType, ProfileType } from '../types';
import { AxiosResponse } from 'axios';
import { ResultCodeCaptcha } from './securityAPI';

interface LoginResponse {
  resultCode: ResultCode | ResultCodeCaptcha;
  data: {
    userId: string;
  };
  messages: string[];
}

interface AuthResponse extends ApiResponse {
  data: {
    id: string;
    email: string;
    login: string;
  };
}

interface SetPhotoResponse extends ApiResponse {
  data: {
    photos: PhotosType;
  };
}

class ProfileAPI extends API {
  constructor () {
    super();
  }

  login (data: LoginProps): Promise<AxiosResponse<LoginResponse>> {
    return this._instance.post('/auth/login', data);
  }

  logout (): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.delete('/auth/login');
  }

  auth (): Promise<AxiosResponse<AuthResponse>> {
    return this._instance.get(`/auth/me`);
  }

  getProfileData (userId: string): Promise<AxiosResponse<ProfileType>> {
    return this._instance.get(`/profile/${userId}`);
  }

  getStatus (userId: string): Promise<AxiosResponse<string>> {
    return this._instance.get(`/profile/status/${userId}`);
  }

  setStatus (status: string): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.put('/profile/status', { status });
  }

  setPhoto (image: File): Promise<AxiosResponse<SetPhotoResponse>> {
    const formData = new FormData();
    formData.append('image', image);

    return this._instance.put('/profile/photo', formData);
  }

  setProfileData (profileData: ProfileType): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.put('/profile', profileData);
  }
}

export default new ProfileAPI();
