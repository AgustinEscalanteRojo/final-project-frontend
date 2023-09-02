import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../../services/api/user'
import {
  togglePostFavByUser,
  togglePostLikeByUser,
} from '../../services/api/post'
import type { User } from '../../models/User'
import type { Post } from '../../models/Post'

const useLogic = (post: Post) => {
  const navigate = useNavigate()
  const [isLike, setLike] = useState(post.isLike)
  const [isFav, setFav] = useState(post.isFav)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const fetchUserMe = useCallback(async () => {
    try {
      const userInfo = await getMe()
      setCurrentUser(userInfo)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  useEffect(() => {
    fetchUserMe()
  }, [fetchUserMe])

  const handleGoToEditForm = useCallback(async () => {
    navigate(`/posts/${post._id}?edit=true`)
  }, [navigate, post])

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

  return {
    currentUser,
    handleGoToEditForm,
    handleLikeClick,
    handleFavoriteClick,
    handleDetailsClick,
    isFav,
    isLike,
  }
}

export default useLogic
