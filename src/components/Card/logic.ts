import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  togglePostFavByUser,
  togglePostLikeByUser,
} from '../../services/api/post'
import type { Props } from './types'

const useLogic = (post: Props['post'], onRemove: Props['onRemove']) => {
  const navigate = useNavigate()
  const [isLike, setLike] = useState(post.isLike)
  const [isFav, setFav] = useState(post.isFav)

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

  return {
    handleGoToEditForm,
    handleLikeClick,
    handleFavoriteClick,
    handleDetailsClick,
    handleOnRemove,
    isFav,
    isLike,
  }
}

export default useLogic
