import { User, userInput, normalizeUser } from '../../models/User'
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

export const getMe = async (): Promise<User | null> => {
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    return data.user
  } catch (e) {
    console.log(e)
  }
  return null
}
