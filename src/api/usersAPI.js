import API from './api';

class UsersAPI extends API {
  constructor() {
    super();
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
