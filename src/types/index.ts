export interface ContactsType {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}

export interface PhotosType {
  small: string;
  large: string;
}

export interface ProfileType {
  userId: string;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
}

export interface Post {
  id: number;
  message: string;
}

export interface User {
  name: string,
  id: string,
  photos: PhotosType,
  status: string,
  followed: boolean
}

export interface LoginProps {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
}
