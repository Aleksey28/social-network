import API, { ApiResponse } from './api';
import { PhotosType, ProfileType } from '../types';
import { AxiosResponse } from 'axios';

interface SetPhotoResponseData {
  photos: PhotosType;
}

class ProfileAPI extends API {
  getProfileData (userId: string): Promise<AxiosResponse<ProfileType>> {
    return this._instance.get(`/profile/${userId}`);
  }

  getStatus (userId: string): Promise<AxiosResponse<string>> {
    return this._instance.get(`/profile/status/${userId}`);
  }

  setStatus (status: string): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.put('/profile/status', { status });
  }

  setPhoto (image: File): Promise<AxiosResponse<ApiResponse<SetPhotoResponseData>>> {
    const formData = new FormData();
    formData.append('image', image);

    return this._instance.put('/profile/photo', formData);
  }

  setProfileData (profileData: ProfileType): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.put('/profile', profileData);
  }
}

export default new ProfileAPI();
