import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toggleFollowUser } from '../../services/api/user'
import type { Props } from './types'

const useLogic = (
  user: Props['user'],
  currentUserFollowing: Props['currentUserFollowing']
) => {
  const navigate = useNavigate()
  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    setIsFollowing(!!currentUserFollowing?.includes(user?._id || ''))
  }, [currentUserFollowing])

  const handleFollowClick = useCallback(async () => {
    if (user._id) {
      await toggleFollowUser(user._id)
      setIsFollowing((prevFollowing) => !prevFollowing)
    }
  }, [user])

  const handleGoToDetails = useCallback(async () => {
    if (user._id) {
      navigate(`/users/${user._id}`)
    }
  }, [user, navigate])

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

  return {
    handleFollowClick,
    getRandomPastelColor,
    isFollowing,
    handleGoToDetails,
  }
}

export default useLogic
