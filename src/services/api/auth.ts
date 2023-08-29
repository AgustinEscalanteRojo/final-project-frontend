import { removeToken, setToken } from '../storage/token'
import type { UserFormFields } from '../../models/User'

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

export const signup = async (data: UserFormFields): Promise<void> => {
  const response = await fetch(`${BASE_URL}/signup`, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.status === 500) {
    const msg = await response.json()
    throw new Error(msg)
  }

  const token = await response.json()

  if (token) {
    setToken(token)
  }
}

export const logout = async (): Promise<void> => {
  removeToken()
}
