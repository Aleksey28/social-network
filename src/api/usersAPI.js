import axios from 'axios';
import { API_SAMURAI_SETTINGS } from '../utils/constants';

class UsersAPI {
  constructor() {
    this._instance = axios.create( {
      baseURL: API_SAMURAI_SETTINGS.baseUrl,
      withCredentials: true,
      headers: {
        'API-KEY': API_SAMURAI_SETTINGS.token,
      },
    } );
  }

  async getUsers( page, pageSize ) {
    const { data } = await this._instance.get( `/users?count=${ pageSize }&page=${ page }` );

    return data;
  }

  async follow( id ) {
    const { data } = await this._instance.post( `/follow/${ id }`, {} );

    return data;
  }

  async unfollow( id ) {
    const { data } = await this._instance.delete( `/follow/${ id }` );

    return data;
  }
}

export default new UsersAPI();
