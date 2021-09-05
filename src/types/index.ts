export interface Contacts {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}

export interface Photos {
  small: string;
  large: string;
}

export interface Profile {
  userId: string;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: Contacts;
  photos: Photos;
}

export interface Post {
  id: number;
  message: string;
}

export interface User {
  name: string,
  id: string,
  photos: Photos,
  status: string,
  followed: boolean
}

export interface LoginProps {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
}
