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

  auth() {
    return this._instance.get( `/auth/me` )
      .then( response => response.data );
  }

  getProfileData( userId ) {
    return this._instance.get( `/profile/${ userId || 16829 }` )
      .then( response => response.data );
  }

  getStatus( userId ) {
    return this._instance.get( `/profile/status/${ userId || 16829 }` )
      .then( response => response.data );
  }

  setStatus( status ) {
    return this._instance.put( '/profile/status', { status } );
  }
}

export default new ProfileAPI();
