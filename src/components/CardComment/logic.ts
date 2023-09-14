import { useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { User } from '../../models/User'
import type { CardCommentProps } from './types'
import { getAllUsers } from '../../services/api/user'

const useLogic = (
  comment: CardCommentProps['comment'],
  onRemove: CardCommentProps['onRemove']
) => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])

  const handleFetchUsers = useCallback(async () => {
    try {
      const userInfo = await getAllUsers()
      setUsers(userInfo)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  useEffect(() => {
    handleFetchUsers()
  }, [handleFetchUsers])

  const handleGoToProfile = useCallback(() => {
    navigate(`/users/${comment.userId}`)
  }, [navigate, comment.userId])

  const handleGoToCurrentUserProfile = useCallback(() => {
    navigate(`/profile`)
  }, [navigate])

  const handleOnRemove = useCallback(async () => {
    if (onRemove) {
      onRemove(comment._id)
    }
  }, [onRemove, comment])

  function getRandomPastelColor() {
    const pastelColors = ['#61C0BF']

    return pastelColors[Math.floor(Math.random() * pastelColors.length)]
  }

  const commentCreator = users.find((user) => user._id === comment.userId)

  return {
    getRandomPastelColor,
    commentCreator,
    handleGoToProfile,
    handleGoToCurrentUserProfile,
    handleOnRemove,
  }
}

export default useLogic
