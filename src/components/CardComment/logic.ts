import { useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { User } from '../../models/User'
import type { CardCommentProps } from './types'
import { getAllUsers } from '../../services/api/user'

const useLogic = (
  comment: CardCommentProps['comment'],
  post: CardCommentProps['post']
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
    navigate(`/users/${comment?.userId}`)
  }, [navigate])

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

  const commentCreator = users.find((user) => user._id === comment?.userId)
  return { getRandomPastelColor, commentCreator, handleGoToProfile }
}

export default useLogic
