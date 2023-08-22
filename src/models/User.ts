export type User = {
    _id: string;
    email: string;
    password: string;
    salt: string;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: 'male' | 'female' | 'non-binary';
    biography?: string;
    avatar?: string;
    city?: string;
    country: string;
    createdAt: Date;
    favPosts: string[];
    sharedPosts: string[];
    followers: string[];
    following: string[];
  };
  
  export type UserInput = {
    _id?: string;
    email: string;
    password: string;
    salt: string;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: 'male' | 'female' | 'non-binary';
    biography?: string;
    avatar?: string;
    city?: string;
    country: string;
    createdAt?: Date;
    favPosts: string[];
    sharedPosts: string[];
    followers: string[];
    following: string[];
  };
  
  export const normalizeUser = (input: User | UserInput) => ({
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
    favPosts: input?.favPosts || [],
    sharedPosts: input?.sharedPosts || [],
    followers: input?.followers || [],
    following: input?.following || [],
  });
  
  export type NormalizedUser = ReturnType<typeof normalizeUser>;
  