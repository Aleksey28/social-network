import axios from 'axios';

class ProfileAPI {
  constructor() {
    this._instance = axios.create( {
      baseURL: 'https://social-network.samuraijs.com/api/1.0',
      withCredentials: true,
      headers: {
        'API-KEY': '9b281f13-b744-4cc8-8a50-53b0d0396ab3',
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
}

export default new ProfileAPI();
