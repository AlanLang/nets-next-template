const Cookies = require('js-cookie');
export const TokenKey = 'Admin-Token';

export const getToken = (): string => {
  return Cookies.get(TokenKey)
}

export const setToken = (token: string, expires = 0): boolean => {
  if (expires > 0){
    return Cookies.set(TokenKey, token, { expires: expires})
  } else {
    return Cookies.set(TokenKey, token)
  }
}

export const removeToken = (): boolean => {
  return Cookies.remove(TokenKey)
}