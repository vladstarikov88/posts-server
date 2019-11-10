import { posts } from '@/assets/mock';

export const getPosts = (request, response) => {
  response.status(200)
  response.json(posts);
};

export default getPosts;
