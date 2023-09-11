import { Post, PostFormFields, normalizePost } from '../../models/Post'
import { getToken, removeToken } from '../storage/token'

const BASE_URL = 'http://localhost:8080/posts'

export const getPosts = async (): Promise<Post[]> => {
  try {
    const token = getToken()
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response || (!response.ok && response.status === 401)) {
      removeToken()
      window.location.reload()
      return []
    }

    const data = await response.json()

    return data?.posts?.map(normalizePost)
  } catch (e) {
    console.log(e)
  }

  return []
}

export const getPostsByFilter = async (filters: string): Promise<Post[]> => {
  try {
    const token = getToken()
    const response = await fetch(`${BASE_URL}?type=${filters}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response || (!response.ok && response.status === 401)) {
      removeToken()
      window.location.reload()
      return []
    }

    const data = await response.json()

    return data?.posts?.map(normalizePost)
  } catch (e) {
    console.log(e)
  }

  return []
}



export const getPostById = async (id: string) => {
  try {
    const token = getToken()
    const response = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    if (!response || (!response.ok && response.status === 401)) {
      removeToken()
      window.location.reload()
      return null
    }

    const data = await response.json()

    if (!data) {
      return null
    }

    return normalizePost(data)
  } catch (error) {
    console.log(error)
  }
}

export const createPost = async (
  input: Partial<PostFormFields>
): Promise<Post> => {
  const token = getToken()
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

export const updatePostById = async ({
  id,
  input,
}: {
  id: Post['_id']
  input: Partial<PostFormFields>
}): Promise<Post | null> => {
  const token = getToken()
  const response = await fetch(`${BASE_URL}/${id}`, {
    body: JSON.stringify(input),
    method: 'PUT',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response || (!response.ok && response.status === 401)) {
    removeToken()
    window.location.reload()
    return null
  }

  const data = await response.json()

  return normalizePost(data)
}

export const togglePostFavByUser = async (id: string): Promise<Post> => {
  const token = getToken()
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

export const togglePostLikeByUser = async (id: string): Promise<Post> => {
  const token = getToken()
  const response = await fetch(`http://localhost:8080/posts/${id}/likes`, {
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
  const token = getToken()
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return true
}
