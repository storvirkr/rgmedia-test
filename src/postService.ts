import axios from "axios";
import { PostType } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async (page: number, limit: number): Promise<PostType[]> => {
  const response = await axios.get<PostType[]>(`${BASE_URL}/posts`, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  return response.data;
};

export const getPostById = async (postId: number): Promise<PostType> => {
  const response = await axios.get<PostType>(`${BASE_URL}/posts/${postId}`);
  return response.data;
};
