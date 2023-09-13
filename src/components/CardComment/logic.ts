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

  const commentCreator = users.find((user) => user._id === comment?.userId)
  return { getRandomPastelColor, commentCreator, handleGoToProfile }
}

export default useLogic
