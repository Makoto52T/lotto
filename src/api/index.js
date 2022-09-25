import axios from 'axios';

export const url = 'https://api.chokmongkon100.com';

const apiAxios = axios.create ({
  baseURL: url,
});

export const SOCKET_URL = url;

export function login (data) {
  // return apiAxios.post('/login', data);
  return {
    token: '04b0e1c8b375a801e5196010a0088962dbd8f0d76d58cf60bc72b1fe628bf68d7f92ff6ed1431ef9c11e37d65e0471a760fc982fd19a2a9c51f4862fcc32c3be',
  };
}

export function lottoOpen () {
  return apiAxios.get ('/lottoOpen');
}
