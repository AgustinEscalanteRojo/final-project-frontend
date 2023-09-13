import { useCallback, useEffect, useState } from 'react'
import { NormalizedUserPostComment } from '../../../models/UserPostComment'
import { User } from '../../../models/User'
import { getComments, sendComment } from '../../../services/api/comments'
import { getAllUsers } from '../../../services/api/user'
import { Props } from './types'
import { useNavigate } from 'react-router-dom'

const useLogic = (post: Props['post'], onRemove: Props['onRemove']) => {
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

      const nuevoComentario = await sendComment(comment, post._id, post.userId)

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
      setComment('')
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
      '#FFD1DC',
      '#FFABAB',
      '#FFC3A0',
      '#FF677D',
      '#D4A5A5',
      '#392F5A',
      '#31A2AC',
      '#61C0BF',
      '#6B4226',
      '#D9BF77',
    ]

    return pastelColors[Math.floor(Math.random() * pastelColors.length)]
  }

  const handleGoToProfile = useCallback(() => {
    navigate(`/users/${post?.userId}`)
  }, [navigate])

  const handleGoToCurrentUserProfile = useCallback(() => {
    navigate(`/profile`)
  }, [navigate])

  const creatorUser = users.find((user) => user._id === post?.userId)

  const handleGoToEditForm = useCallback(async () => {
    navigate(`/posts/${post?._id}?edit=true`)
  }, [navigate, post])

  const handleOnRemove = useCallback(async () => {
    if (post && onRemove) {
      onRemove(post._id)
    }
  }, [onRemove, post])

  return {
    comment,
    comments,
    handleCommentChange,
    handleCommentSubmit,
    getRandomPastelColor,
    handleGoToProfile,
    creatorUser,
    handleGoToEditForm,
    handleOnRemove,
    handleGoToCurrentUserProfile,
  }
}

export default useLogic
