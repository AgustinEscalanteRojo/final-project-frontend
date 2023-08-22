import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/api/post";



const useLogic = () => {
  const navigate = useNavigate();
  const handleCreate = useCallback(
    async (values: {
      title: string
      type: string
      duration: string
      difficulty: string
      allergies: string
      description: string
      ingredients: {
        name: string
        quantity: number
        unity: string
      }[]
      diners: number
      steps: {
        title: string
        description: string
        order: number
        image: string[]
      }[]
      mainImage?: string
    }) => {
      try {
        await createPost(values)
      } catch (error) {
        console.error(error)
      }
    },
    [navigate]
  )

  return { handleCreate };
};

export default useLogic;

