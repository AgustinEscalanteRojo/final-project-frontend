import { getToken } from '../storage/token'
import {
  NormalizedUserPostComment,
  normalizeUserPostComment,
} from '../../models/UserPostComment'

const API_URL = 'http://localhost:8080/posts/comentarios'
const BASE_URL = 'http://localhost:8080/posts/comments'

export const getComments = async (
  postId: string
): Promise<NormalizedUserPostComment[]> => {
  try {
    const token = getToken()
    const response = await fetch(`${API_URL}/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Error al obtener comentarios: ${response.status}`)
    }

    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
      const data = await response.json()
      return data?.map(normalizeUserPostComment)
    } else {
      throw new Error('La respuesta no es un JSON válido')
    }
  } catch (error) {
    console.error('Error al obtener comentarios:', error)
    throw new Error('Error al obtener comentarios')
  }
}

export const sendComment = async (
  comment: string,
  postId: string,
  userId: string
): Promise<NormalizedUserPostComment> => {
  try {
    const token = getToken()
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ comment, postId, userId }),
    })

    if (response.ok) {
      const responseData = await response.json()
      if (responseData.comentario) {
        return normalizeUserPostComment(responseData.comentario)
      } else {
        console.error(
          'El comentario no está presente en la respuesta:',
          responseData
        )
        throw new Error(
          'Error al enviar el comentario: Comentario no encontrado en la respuesta'
        )
      }
    } else {
      const errorData = await response.json()
      throw new Error(`Error al enviar el comentario: ${errorData.error}`)
    }
  } catch (error) {
    console.error('Error en la conexión:', error)
    throw new Error('Error en la conexión')
  }
}

export const removeCommentById = async (id: string): Promise<boolean> => {
  const token = getToken()
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return true
}
