import axios from "axios";

export const url = "http://localhost:90";

const apiAxios = axios.create({
  baseURL: url,
});

export const SOCKET_URL = url;
const LOGIN_URL = "/api/auth/login";


export function login(data) {
  return apiAxios.post(LOGIN_URL, data);
}

export function getFunction(data, header) {
  return apiAxios.get("path" + data, header);
}
