import axios from 'axios';
import { IPosts } from '../interfaces/globalInterfaces';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = async (): Promise<IPosts[]> => {
  try {
    const { data } = await api.get('/posts');

    const posts = data as IPosts[];

    return posts;
  } catch (error) {
    return [];
  }
};

export const getPostById = async (
  postId: number
): Promise<IPosts | undefined> => {
  try {
    const { data } = await api.get(`/posts/${postId}`);

    const post = data as IPosts;

    return post;
  } catch (error) {
    console.log(error.message);
  }
};
