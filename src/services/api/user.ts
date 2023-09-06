import { normalizeUser, User } from '../../models/User'
import { getToken } from '../storage/token'

const BASE_URL = 'http://localhost:8080/users'
const token = getToken()

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    return data?.users?.map(normalizeUser)
  } catch (e) {
    console.log(e)
  }
  return []
}

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Error fetching user')
    }

    const data = await response.json()

    return normalizeUser(data)
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getMe = async (): Promise<User | null> => {
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    return normalizeUser(data)
  } catch (e) {
    console.log(e)
  }
  return null
}

export const getProfile = async (): Promise<User | null> => {
  try {
    const response = await fetch(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    return normalizeUser(data)
  } catch (e) {
    console.log(e)
  }
  return null
}

export const toggleFollowUser = async (id: string): Promise<User | null> => {
  try {
    const token = getToken()
    const response = await fetch(`${BASE_URL}/${id}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    return normalizeUser(data)
  } catch (e) {
    console.log(e)
  }
  return null
}
