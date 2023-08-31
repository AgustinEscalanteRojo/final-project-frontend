export type postResponse = {
  _id: string
  userId: string
  mainImage?: string
  title: string
  type: 'Salad' | 'Dessert' | 'Breakfast'
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Difficult'
  allergies: Array<
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
  >

  description?: string
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
  diners?: number
  steps: {
    image: string[]
    title: string
    description: string
    order: number
  }[]
  createdAt: Date

  // custom user fields
  isFav?: boolean
  isLike?: boolean
  isShared?: boolean
}

export type PostFormFields = {
  title: string
  type: string
  duration: string
  difficulty: string
  allergies: string[]
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
}

export const normalizePost = (input: postResponse) => ({
  _id: input?._id || '',
  userId: input?.userId || '',
  mainImage: input?.mainImage || '',
  title: input?.title || '',
  type: input?.type || '',
  duration: input?.duration || '',
  difficulty: input?.difficulty || '',
  allergies: input?.allergies || [],
  description: input?.description || '',
  ingredients: input?.ingredients || [],
  diners: input?.diners || undefined,
  steps: input?.steps || [],
  createdAt: input?.createdAt ? new Date(input.createdAt) : new Date(),
  isFav: input?.isFav || false,
  isLike: input?.isLike || false,
  isShared: input?.isShared || false,
})

export type Post = ReturnType<typeof normalizePost>
