import { Post, PostInput, normalizePost } from '../../models/Post'
import { getToken } from '../storage/token'

const BASE_URL = 'http://localhost:8080/posts'
const token = getToken()

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    return data?.posts?.map(normalizePost)
  } catch (e) {
    console.log(e)
  }
  return []
}

export const createPost = async (input: PostInput): Promise<Post> => {
  const response = await fetch(BASE_URL, {
    body: JSON.stringify(input),
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  return normalizePost(data)
}

export const togglePostFavByUser = async (id: string): Promise<Post> => {
  const response = await fetch(`http://localhost:8080/posts/${id}/favs`, {
    body: JSON.stringify(id),
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()

  return normalizePost(data)
}

export const removePostById = async (id: string): Promise<boolean> => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return true
}
