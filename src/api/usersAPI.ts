import API, { ApiResponse } from './api';
import { UserType } from '../types';
import { UserFiltersType } from '../redux/users/reducer';
import { FilterFriend } from '../utils/enums';

interface GetUsersResponse {
  items: UserType[];
  totalCount: number;
  error: null | string;
}

class UsersAPI extends API {
  getUsers (page: number, pageSize: number, filters: UserFiltersType): Promise<GetUsersResponse> {
    const params = [`count=${pageSize}`, `page=${page}`];

    if (filters.term) {
      params.push(`term=${filters.term}`);
    }

    if (Number(filters.friend) !== FilterFriend.AllUsers) {
      params.push(`friend=${!!Number(filters.friend)}`);
    }

    return this._instance.get(`/users?${params.join('&')}`).then(res => res.data);
  }

  follow (id: string): Promise<ApiResponse> {
    return this._instance.post(`/follow/${id}`, {}).then(res => res.data);
  }

  unfollow (id: string): Promise<ApiResponse> {
    return this._instance.delete(`/follow/${id}`).then(res => res.data);
  }
}

export default new UsersAPI();
