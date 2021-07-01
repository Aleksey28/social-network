import axios from 'axios';

class UsersAPI {
  constructor() {
    this._instance = axios.create( {
      baseURL: 'https://social-network.samuraijs.com/api/1.0',
      withCredentials: true,
      headers: {
        'API-KEY': '9b281f13-b744-4cc8-8a50-53b0d0396ab3',
      },
    } );
  }

  async getUsers( page, pageSize ) {
    const response = await this._instance.get( `/users?count=${ pageSize }&page=${ page }` );

    return response.data;
  }

  async follow( id ) {
    const response = await this._instance.post( `/follow/${ id }`, {} );

    return response.data;
  }

  async unfollow( id ) {
    const response = await this._instance.delete( `/follow/${ id }` );

    return response.data;
  }
}

export default new UsersAPI();
