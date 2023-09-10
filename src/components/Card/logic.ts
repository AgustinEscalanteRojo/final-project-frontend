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

  const creatorUser = users.find((user) => user._id === post.userId)

  return {
    handleGoToEditForm,
    handleLikeClick,
    handleFavoriteClick,
    handleDetailsClick,
    handleOnRemove,
    getRandomPastelColor,
    isFav,
    isLike,
    users,
    creatorUser,
  }
}

export default useLogic
