import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import { Post } from '../../models/Post'

const useLogic = () => {
  const navigate = useNavigate()

  const [allergies, setAllergies] = useState<string[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [difficultys, setdifficultys] = useState<string[]>([])
  const [allPosts, setPosts] = useState<Post[]>([])
  const handleDifficultysChange = (
    event: ChangeEvent<HTMLInputElement>,
    difficulty: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setdifficultys([...difficultys, difficulty])
    } else {
      setdifficultys(difficultys.filter((a) => a !== difficulty))
    }
  }

  const handleAllergiesChange = (
    event: ChangeEvent<HTMLInputElement>,
    allergy: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setAllergies([...allergies, allergy])
    } else {
      setAllergies(allergies.filter((a) => a !== allergy))
    }
  }

  const handleTypeChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setTypes([...types, type])
    } else {
      setTypes(types.filter((a) => a !== type))
    }
  }

  return {
    allergies,
    difficultys,
    types,
    handleAllergiesChange,
    handleDifficultysChange,
    handleTypeChange,
  }
}

export default useLogic
