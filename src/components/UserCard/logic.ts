import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { followUser } from '../../services/api/user'
import type { User } from '../../models/User'




const useLogic = (user: User) => {
  const navigate = useNavigate()
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    // Aquí deberías realizar la lógica para seguir/dejar de seguir al usuario.
   
    setIsFollowing((prevFollowing) => !prevFollowing);
  };

  const handleFollowClick = useCallback(async () => {
    await followUser(user._id);
    toggleFollow(); 
  }, [user]);


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
  return {
    handleFollowClick,
    getRandomPastelColor,
    toggleFollow,
    isFollowing,
  }
}

export default useLogic
