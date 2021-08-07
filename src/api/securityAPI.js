import API from './api';

class SecurityAPI extends API {
  constructor() {
    super();
  }

  async getCaptcha() {
    const { data } = await this._instance.get( `/security/get-captcha-url` );

    return data;
  }
}

export default new SecurityAPI();
