import { Router } from 'express';
import getPosts from './get-posts';
import addPost from './add-post';
import getUsers from './get-users';

const router = new Router();

router.get('/posts', getPosts);
router.post('/add-post', addPost);
router.get('/users', getUsers);

export { router };
