import API, { ApiResponse } from './api';
import { AxiosResponse } from 'axios';
import { User } from '../types';

interface GetUsersResponse {
  items: User[];
  totalCount: number;
  error: null | string
}

class UsersAPI extends API {
  constructor() {
    super();
  }

  getUsers( page: number, pageSize: number ): Promise<AxiosResponse<GetUsersResponse>> {
    return this._instance.get( `/users?count=${ pageSize }&page=${ page }` );
  }

  follow( id: string ): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.post( `/follow/${ id }`, {} );
  }

  unfollow( id: string ): Promise<AxiosResponse<ApiResponse>> {
    return this._instance.delete( `/follow/${ id }` );
  }
}

export default new UsersAPI();
