import { Router } from 'express';
import getPosts from './get-posts';
import addPost from './add-post';
import deletePost from './delete-post';
import getUsers from './get-users';
import optionsResolver from './options-resolver';

const router = new Router();

router.get('/posts', getPosts);
router.get('/users', getUsers);
router.post('/add-post', addPost);
router.delete('/delete-post/:postId', deletePost);
router.options('*', optionsResolver);

export { router };
