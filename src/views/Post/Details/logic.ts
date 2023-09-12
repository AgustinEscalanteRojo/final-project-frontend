import { useCallback, useEffect, useState } from 'react'
import { NormalizedUserPostComment } from '../../../models/UserPostComment'
import { User } from '../../../models/User'
import { getComments, sendComment } from '../../../services/api/comments'
import { getAllUsers } from '../../../services/api/user'
import { Props } from './types'
import { useNavigate } from 'react-router-dom'

const useLogic = (post: Props['post']) => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<NormalizedUserPostComment[]>([])

  const fetchUsers = useCallback(async () => {
    try {
      const userInfo = await getAllUsers()
      setUsers(userInfo)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

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

  function getRandomPastelColor() {
    const pastelColors = [
      '#FFD1DC', // Light Pink
      '#FFABAB', // Light Red
      '#FFC3A0', // Light Orange
      '#FF677D', // Light Coral
      '#D4A5A5', // Light Mauve
      '#392F5A', // Light Indigo
      '#31A2AC', // Light Teal
      '#61C0BF', // Light Cyan
      '#6B4226', // Light Brown
      '#D9BF77', // Light Yellow
    ]

    return pastelColors[Math.floor(Math.random() * pastelColors.length)]
  }

  const handleGoToProfile = useCallback(() => {
    navigate(`/users/${post?.userId}`)
  }, [navigate])

  const creatorUser = users.find((user) => user._id === post?.userId)

  return {
    comment,
    comments,
    handleCommentChange,
    handleCommentSubmit,
    getRandomPastelColor,
    handleGoToProfile,
    creatorUser,
  }
}

export default useLogic
