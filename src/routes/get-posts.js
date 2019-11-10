import { posts } from '@/assets/mock';
import Post from '@/modules/Post'

export const getPosts = (request, response) => {
  response.status(200)
  // response.json(posts);

  Post
    .find()
    .then((posts) => {
      response.json(posts)
    })
};

export default getPosts;
