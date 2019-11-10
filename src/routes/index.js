import { Router } from 'express';
import getPosts from './get-posts';
import getUsers from './get-users';

const router = new Router();

router.get('/posts', getPosts);
router.get('/users', getUsers);

export { router };
