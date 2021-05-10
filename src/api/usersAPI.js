import axios from 'axios';

class usersAPI {
  constructor() {
    this._instance = axios.create( {
      baseURL: 'https://social-network.samuraijs.com/api/1.0',
      withCredentials: true,
      headers: {
        'API-KEY': '9b281f13-b744-4cc8-8a50-53b0d0396ab3',
      },
    } );
  }

  getUsers( page, pageSize ) {
    return this._instance.get( `/users?count=${ pageSize }&page=${ page }` )
      .then(response => response.data);
  }

  follow( id ) {
    return this._instance.post( `/follow/${ id }`, {} )
      .then(response => response.data);
  }

  unfollow( id ) {
    return this._instance.delete( `/follow/${ id }` )
      .then(response => response.data);
  }
}

export default new usersAPI();
