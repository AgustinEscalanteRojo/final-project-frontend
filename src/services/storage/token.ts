export const USER_TOKEN_KEY = 'userToken'

export const getToken = () => {
  const response = window.localStorage.getItem(USER_TOKEN_KEY)
  return response
}

export const setToken = (token: string) => {
  window.localStorage.setItem(USER_TOKEN_KEY, token)
}

export const removeToken = () => {
  window.localStorage.removeItem(USER_TOKEN_KEY)
}
