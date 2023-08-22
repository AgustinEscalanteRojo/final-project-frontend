export type UserPostLikeResponse = {
    _id: string;
    postId: string;
    userId: string;
    createdAt: Date;
  };
  
  export type UserPostLikeInput = {
    _id?: string;
    postId: string;
    userId: string;
    createdAt?: Date;
  };
  
  export const normalizeUserPostLike = (
    input: UserPostLikeResponse | UserPostLikeInput
  ) => ({
    _id: input?._id || '',
    postId: input?.postId || '',
    userId: input?.userId || '',
    createdAt: input?.createdAt ? new Date(input.createdAt) : new Date(),
  });
  
  export type NormalizedUserPostLike = ReturnType<typeof normalizeUserPostLike>;