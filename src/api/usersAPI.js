import axios from 'axios';
import { apiSamuraiSettings } from '../utils/constants';

export default class usersAPI {
  // constructor( props ) {
  //   const instance =
  //
  // }
  getUsers( page, pageSize ) {
    return axios.get(
      `${ apiSamuraiSettings.baseUrl }/users?count=${ pageSize }&page=${ page + 1 }`,
      { withCredentials: true },
    );
  }

  follow(id) {
    return axios.post( `${ apiSamuraiSettings.baseUrl }/follow/${ id }`, {}, {
      withCredentials: true, headers: {
        'API-KEY': apiSamuraiSettings.token,
      },
    } );
  }

  unfollow(id) {
    return axios.delete( `${ apiSamuraiSettings.baseUrl }/follow/${ id }`, {
      withCredentials: true, headers: {
        'API-KEY': apiSamuraiSettings.token,
      },
    } );
  }
}
