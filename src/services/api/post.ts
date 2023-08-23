import { Post, PostInput, normalizePost } from "../../models/Post";
import { getToken } from "../storage/token";

const BASE_URL = 'http://localhost:8080/posts'
const token = getToken()





export const createPost = async (input: PostInput): Promise<Post> => {
  const response = await fetch(BASE_URL, {
    body: JSON.stringify(input),
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return normalizePost(data);
};








