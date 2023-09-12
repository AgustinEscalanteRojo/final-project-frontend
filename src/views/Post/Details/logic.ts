import { useEffect, useState } from 'react'
import { NormalizedUserPostComment } from '../../../models/UserPostComment'
import { getComments, sendComment } from '../../../services/api/comments'
import { Props } from './types'

const useLogic = (post: Props['post']) => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<NormalizedUserPostComment[]>([])

  const handleCommentChange = (e: any) => {
    setComment(e.target.value)
  }

  const handleCommentSubmit = async (e: any) => {
    e.preventDefault()

    try {
      if (!post) {
        console.error('No se ha encontrado el post')
        return
      }

      const nuevoComentario = await sendComment(comment, post._id)

      setComments((prevComments) => [
        ...prevComments,
        {
          _id: nuevoComentario._id,
          userId: nuevoComentario.userId,
          postId: nuevoComentario.postId,
          comment: nuevoComentario.comment,
          replyTo: nuevoComentario.replyTo,
          createdAt: nuevoComentario.createdAt,
        },
      ])
      setComment('') // Limpia el campo de comentarios
    } catch (error) {
      console.error('Error al enviar el comentario:', error)
    }
  }

  useEffect(() => {
    if (post) {
      getComments(post._id)
        .then((comments) => setComments(comments))
        .catch((error) => console.error('Error al obtener comentarios:', error))
    }
  }, [post])

  return { comment, comments, handleCommentChange, handleCommentSubmit }
}

export default useLogic
