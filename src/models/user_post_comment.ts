export type UserPostCommentResponse = {
    _id: string;
    userId: string;
    postId: string;
    comment: string;
    replyTo?: string;
    createdAt: Date;
  };
  
  export type UserPostCommentInput = {
    _id?: string;
    userId?: string;
    postId?: string;
    comment: string;
    replyTo?: string;
    createdAt?: Date;
  };
  
  export const normalizeUserPostComment = (
    input: UserPostCommentResponse | UserPostCommentInput
  ) => ({
    _id: input?._id || '',
    userId: input?.userId || '',
    postId: input?.postId || '',
    comment: input?.comment || '',
    replyTo: input?.replyTo || undefined,
    createdAt: input?.createdAt ? new Date(input.createdAt) : new Date(),
  });
  
  export type NormalizedUserPostComment = ReturnType<typeof normalizeUserPostComment>;