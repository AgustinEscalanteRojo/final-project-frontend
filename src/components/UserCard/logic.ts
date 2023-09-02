import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { followUser } from '../../services/api/user'
import type { User } from '../../models/User'


const useLogic = (user: User) => {
  const navigate = useNavigate()
  const [isFollow, setFollow] = useState()

  const handleFollowClick = useCallback(async () => {
    await followUser(user._id)
    setFollow(isFollow)
  }, [user])


  return {
    handleFollowClick,
  }
}

export default useLogic
