import { removeToken, setToken } from '../storage/token'

const BASE_URL = 'http://localhost:8080/auth'

export const login = async (email: string, password: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/login`, {
    body: JSON.stringify({ email, password }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const token = await response.json()

  if (token) {
    setToken(token)
  }
}

export const signup = async (
  email: string,
  password: string,
  username: string,
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  country: string,
  city: string,
  biography: string,
  avatar: string
): Promise<void> => {
  const response = await fetch(`${BASE_URL}/signup`, {
    body: JSON.stringify({
      email,
      password,
      username,
      firstName,
      lastName,
      age,
      gender,
      country,      
      city,
      biography,
      avatar
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const token = await response.json()

  if (token) {
    setToken(token)
  }
}

export const logout = async (): Promise<void> => {
  removeToken()
}
