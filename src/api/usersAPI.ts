import API, { ApiResponse } from './api';
import { UserFiltersType, UserType } from '../types';

interface GetUsersResponse {
  items: UserType[];
  totalCount: number;
  error: null | string;
}

class UsersAPI extends API {
  constructor () {
    super();
  }

  getUsers (page: number, pageSize: number, filters: UserFiltersType): Promise<GetUsersResponse> {
    const params = [`count=${pageSize}`, `page=${page}`];

    if (filters.term) {
      params.push(`term=${filters.term}`);
    }

    if (filters.friend) {
      params.push(`friend=${filters.friend}`);
    }

    return this._instance.get(`/users?count=${params.join('&')}`).then(res => res.data);
  }

  follow (id: string): Promise<ApiResponse> {
    return this._instance.post(`/follow/${id}`, {}).then(res => res.data);
  }

  unfollow (id: string): Promise<ApiResponse> {
    return this._instance.delete(`/follow/${id}`).then(res => res.data);
  }
}

export default new UsersAPI();
