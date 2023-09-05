import { postResponse, normalizePost } from './Post'

export type UserResponse = {
  _id: string
  age: number
  avatar?: string
  biography?: string
  city?: string
  country: string
  createdAt: Date
  email: string
  favPosts: postResponse[]
  firstName: string
  followers: UserResponse[]
  following: UserResponse[]
  gender: string
  lastName: string
  password: string
  posts: postResponse[]
  salt: string
  sharedPosts: string[]
  username: string
}

export type UserFormFields = {
  email: string
  password: string
  username: string
  firstName: string
  lastName: string
  age: number
  gender: string
  country: string
  city: string
  biography: string
  avatar: string
}

export const normalizeUser = (input: UserResponse) => ({
  _id: input?._id || '',
  email: input?.email || '',
  password: input?.password || '',
  salt: input?.salt || '',
  username: input?.username || '',
  firstName: input?.firstName || '',
  lastName: input?.lastName || '',
  age: input?.age || 0,
  gender: input?.gender || 'male',
  biography: input?.biography || '',
  avatar: input?.avatar || '',
  city: input?.city || '',
  country: input?.country || '',
  createdAt: input?.createdAt ? new Date(input.createdAt) : new Date(),
  favPosts:
    input?.favPosts?.length > 0
      ? input?.favPosts.map((post) => normalizePost({ ...post, isFav: true }))
      : [],
  myPosts: input?.posts?.length > 0 ? input?.posts.map(normalizePost) : [],
  sharedPosts: input?.sharedPosts || [],
  followers:
    input?.followers?.length > 0
      ? input.followers.map((user) => ({
          _id: user._id,
          username: user.username,
          firstName: user.firstName,
        }))
      : [],
  following:
    input?.following?.length > 0
      ? input.following.map((user) => ({
          _id: user._id,
          username: user.username,
          firstName: user.firstName,
        }))
      : [],
})

export type User = ReturnType<typeof normalizeUser>
