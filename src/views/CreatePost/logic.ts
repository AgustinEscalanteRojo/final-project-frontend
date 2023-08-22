import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/api/post";



const useLogic = () => {
  const navigate = useNavigate();
  const handleCreate = useCallback(
    async (values: {
      title: string
      type: 'Salad' | 'Dessert' | 'Breakfast'
      duration: string
      difficulty: 'Easy' | 'Moderate' | 'Difficult'
      allergies:
        | 'Gluten'
        | 'Crustaceans'
        | 'Eggs'
        | 'Fish'
        | 'Peanuts'
        | 'Soy'
        | 'Dairy'
        | 'Nuts'
        | 'Celery'
        | 'Mustard'
        | 'Sesame'
        | 'Sulphites'
        | 'Lupins'
        | 'Mollusks'
      description: string
      ingredients: {
        name: string
        quantity: number
        unity:
          | 'Liter'
          | 'Milliliters'
          | 'Kilograms'
          | 'Grams'
          | 'Pound'
          | 'Ounce'
          | 'Tablespoon'
          | 'Tablespoon dessert'
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

