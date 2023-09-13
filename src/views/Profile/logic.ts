import { useCallback, useEffect, useState, SyntheticEvent } from 'react'
import { getProfile } from '../../services/api/user'
import type { User } from '../../models/User'

const useLogic = () => {
  const [user, setUser] = useState<User | null>(null)
  const [value, setValue] = useState('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const fetchUserMe = useCallback(async () => {
    try {
      const userInfo = await getProfile()
      setUser(userInfo)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  useEffect(() => {
    fetchUserMe()
  }, [fetchUserMe])

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
    user,
    handleChange,
    value,
    getRandomPastelColor
  }
}

export default useLogic
