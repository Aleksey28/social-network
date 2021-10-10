import API, { ApiResponse } from './api';
import { UserType } from '../types';

interface GetUsersResponse {
  items: UserType[];
  totalCount: number;
  error: null | string;
}

class UsersAPI extends API {
  constructor () {
    super();
  }

  getUsers (page: number, pageSize: number): Promise<GetUsersResponse> {
    return this._instance.get(`/users?count=${pageSize}&page=${page}`).then(res => res.data);
  }

  follow (id: string): Promise<ApiResponse> {
    return this._instance.post(`/follow/${id}`, {}).then(res => res.data);
  }

  unfollow (id: string): Promise<ApiResponse> {
    return this._instance.delete(`/follow/${id}`).then(res => res.data);
  }
}

export default new UsersAPI();
