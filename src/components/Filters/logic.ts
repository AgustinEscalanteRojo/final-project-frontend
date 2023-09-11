import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import { Post } from '../../models/Post'
import { getPosts } from '../../services/api/post'

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
      console.log(event.target.value)
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
      console.log(event.target.value)
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
      console.log(event.target.value)
      setTypes([...types, type])
    } else {
      setTypes(types.filter((a) => a !== type))
    }
  }

  const filterPosts = async (filter: string) => {
    try{
      const allPosts = await getPosts()
      const filteredPosts = allPosts.filter(
        (post) => post.type === filter
      )
      setPosts(filteredPosts)
      return allPosts
    } catch (error){
      console.log(error)
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
