import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  togglePostFavByUser,
  togglePostLikeByUser,
} from '../../services/api/post'
import type { Props } from './types'
import { User } from '../../models/User'
import { getAllUsers } from '../../services/api/user'

const useLogic = (post: Props['post'], onRemove: Props['onRemove']) => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [isLike, setLike] = useState(post.isLike)
  const [isFav, setFav] = useState(post.isFav)

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

  const handleGoToEditForm = useCallback(async () => {
    navigate(`/posts/${post._id}?edit=true`)
  }, [navigate, post])

  const handleOnRemove = useCallback(async () => {
    if (onRemove) {
      onRemove(post._id)
    }
  }, [onRemove, post])

  const handleDetailsClick = useCallback(() => {
    navigate(`/posts/${post._id}`)
  }, [navigate])

  const handleLikeClick = useCallback(async () => {
    await togglePostLikeByUser(post._id)
    setLike((prev) => !prev)
  }, [post])

  const handleFavoriteClick = useCallback(async () => {
    await togglePostFavByUser(post._id)
    setFav((prev) => !prev)
  }, [post])

  const handleGoToProfile = useCallback(() => {
    navigate(`/users/${post.userId}`)
  }, [navigate])

  const handleGoToCurrentUserProfile = useCallback(() => {
    navigate(`/profile`)
  }, [navigate])

  const creatorUser = users.find((user) => user._id === post.userId)

  return {
    handleGoToProfile,
    handleGoToEditForm,
    handleLikeClick,
    handleFavoriteClick,
    handleDetailsClick,
    handleOnRemove,
    getRandomPastelColor,
    handleGoToCurrentUserProfile,
    isFav,
    isLike,
    users,
    creatorUser,
  }
}

export default useLogic
