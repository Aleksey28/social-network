import axios from 'axios';
import { API_SAMURAI_SETTINGS } from '../utils/constants';

class ProfileAPI {
  constructor() {
    this._instance = axios.create( {
      baseURL: API_SAMURAI_SETTINGS.baseUrl,
      withCredentials: true,
      headers: {
        'API-KEY': API_SAMURAI_SETTINGS.token,
      },
    } );
  }

  login( { email, password, rememberMe } ) {
    return this._instance.post( '/auth/login', { email, password, rememberMe } );
  }

  logout() {
    return this._instance.delete( '/auth/login' );
  }

  async auth() {
    const { data } = await this._instance.get( `/auth/me` );

    return data;
  }

  async getProfileData( userId ) {
    const { data } = await this._instance.get( `/profile/${ userId }` );

    return data;
  }

  async getStatus( userId ) {
    const { data } = await this._instance.get( `/profile/status/${ userId }` );

    return data;
  }

  setStatus( status ) {
    return this._instance.put( '/profile/status', { status } );
  }

  setPhoto( image ) {
    const formData = new FormData();
    formData.append( 'image', image );

    return this._instance.put( '/profile/photo', formData );
  }
}

export default new ProfileAPI();
